const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectID;

const DATABASE_URL = 'mongodb://botterca:7Epa4RVj2AYsBwauqVV6o2mFZrkPTyYkvlcwsC3PVwlqs8nroLTZVyfmJ941b0TbKPvpKUJMR9a5EjetExvc1w==@botterca.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@botterca@'


const DATABASE_NAME = 'Handles';
const DATABASE_COLLECTION_NAME ='my-Handles';

let mongoConnection = null;
let db = null;

const insertDocuments = async (
    documents = [{ a: 1 }, { a: 2 }, { a: 3 }]
) => {
    // check params
    if (!db || !documents)
        throw Error('insertDocuments::missing required params');

    // Get the collection
    const collection = await db.collection(DATABASE_COLLECTION_NAME);

    // Insert some documents
    return await collection.insertMany(documents);
};
const findDocuments = async (
    query = { a: 3 }
) => {
    
    // check params
    if (!db)
        throw Error('findDocuments::missing required params');

    // Get the collection
    const collection = await db.collection(DATABASE_COLLECTION_NAME );

    // find documents
    return await collection.find(query).toArray();
};

const removeDocuments = async (
    docFilter = {}
) => {
    
    // check params
    if (!db )
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

connectToDatabase();
insertDocuments(documents = [{ a: 1 }, { a: 2 }, { a: 3 }]);

module.exports = {
    insertDocuments,
    findDocuments,
    removeDocuments,
    ObjectId,
    connectToDatabase
};