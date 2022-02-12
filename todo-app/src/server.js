const express = require("express");
const app = express();
const {MongoClient} = require('mongodb');
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripe = require("stripe")('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "eur",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});



async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb://handlehandler:UtS8TDutIMbudcym@handlesdb-shard-00-00.rlxnx.mongodb.net:27017,handlesdb-shard-00-01.rlxnx.mongodb.net:27017,handlesdb-shard-00-02.rlxnx.mongodb.net:27017/HandlesDB?ssl=true&replicaSet=atlas-lbwbkj-shard-0&authSource=admin&retryWrites=true&w=majority";
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        
        await  handles.PaymentMehtods.insert(
            {
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
              }
        )
 
        console.log("Successfully inserted into DB!")

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

app.listen(4242, () => console.log("Node server listening on port 4242!"));