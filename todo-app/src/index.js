const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectID;

const DATABASE_URL = 'mongodb://botterca:7Epa4RVj2AYsBwauqVV6o2mFZrkPTyYkvlcwsC3PVwlqs8nroLTZVyfmJ941b0TbKPvpKUJMR9a5EjetExvc1w==@botterca.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@botterca@'


const DATABASE_NAME = 'Handles';
const DATABASE_COLLECTION_NAME = 'my-Handles';

let mongoConnection = null;
let db = null;

const paymentMethod = {
    "id": "pm_1KQhWA2eZvKYlo2CsCA8Fqvp",
    "object": "payment_method",
    "billing_details": {
        "address": {
            "city": null,
            "country": null,
            "line1": null,
            "line2": null,
            "postal_code": null,
            "state": null
        },
        "email": "jenny@example.com",
        "name": null,
        "phone": "+15555555555"
    },
    "card": {
        "brand": "visa",
        "checks": {
            "address_line1_check": null,
            "address_postal_code_check": null,
            "cvc_check": "pass"
        },
        "country": "US",
        "exp_month": 8,
        "exp_year": 2023,
        "fingerprint": "Xt5EWLLDS7FJjR1c",
        "funding": "credit",
        "generated_from": null,
        "last4": "4242",
        "networks": {
            "available": [
                "visa"
            ],
            "preferred": null
        },
        "three_d_secure_usage": {
            "supported": true
        },
        "wallet": null
    },
    "created": 123456789,
    "customer": null,
    "livemode": false,
    "metadata": {
        "order_id": "123456789"
    },
    "type": "card"
};


const insertDocuments = async (
    documents = [{ a: 1 }, { a: 2 }, { a: 3 }]
) => {
    // check params
    if (!db || !documents)
        throw Error('insertDocuments::missing required params');

    // Get the collection
    const collection = await db.collection(DATABASE_COLLECTION_NAME);

    // Insert some documents
    return await collection.insert(documents);
};
const findDocuments = async (
    query = { a: 3 }
) => {

    // check params
    if (!db)
        throw Error('findDocuments::missing required params');

    // Get the collection
    const collection = await db.collection(DATABASE_COLLECTION_NAME);

    // find documents
    return await collection.find(query).toArray();
};

const removeDocuments = async (
    docFilter = {}
) => {

    // check params
    if (!db)
        throw Error('removeDocuments::missing required params');

    // Get the documents collection
    const collection = await db.collection(DATABASE_COLLECTION_NAME);

    // Delete document
    return await collection.deleteMany(docFilter);
};

const connect = async (url) => {

    // check params
    if (!url) throw Error('connect::missing required params');

    return MongoClient.connect(url, { useUnifiedTopology: true });
};

const connectToDatabase = async () => {
    try {
        if (!DATABASE_URL || !DATABASE_NAME) {
            console.log('DB required params are missing');
            console.log(`DB required params DATABASE_URL = ${DATABASE_URL}`);
            console.log(`DB required params DATABASE_NAME = ${DATABASE_NAME}`);
        }

        mongoConnection = await connect(DATABASE_URL);
        db = mongoConnection.db(DATABASE_NAME);

        console.log(`DB connected = ${!!db}`);

        return !!db;

    } catch (err) {
        console.log('DB not connected - err');
        console.log(err);
    }
};
const testInsertFromLocal = async () => {
    try {
        await connectToDatabase();
        const collection = await db.collection(DATABASE_COLLECTION_NAME);
        await collection.insert(paymentMethod);
        console.log("Successfully inserted into DB!");

    } catch (e) {
        console.error(e);
    } finally {
        console.log("All done.")
    }
}

module.exports = {
    testInsertFromLocal,
    insertDocuments,
    findDocuments,
    removeDocuments,
    ObjectId,
    connectToDatabase
};