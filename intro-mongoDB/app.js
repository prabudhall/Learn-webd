const { MongoClient } = require("mongodb");

// Connection URI
const uri =
  "mongodb://127.0.0.1:27017";

const dbName = "newDB";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Establish and verify connection
    await client.db(dbName);
    console.log("Connected successfully to server");
    // console.log(client.db().admin().listDatabases());
  } finally {

      // deciding the name of collection where the value is to be inserted
      const collection = client.db(dbName).collection("newtb");

      // inserting the the value in the collection
      // const doc = { name: "Neapolitan pizza", shape: "round" };
      // const result = await collection.insertOne(doc);
      // console.log(
      //   `A document was inserted with the _id: ${result.insertedId}`,
      // );

      // for inserting many the document(key value pair) should be in array form
      // try{
      //   const docs = [{ name: "Burger", shape: "gol" }, { name: "sandwich", shape: "triangle" }, { name: "pasta", shape: "long" }];
      //   const insertResult = await collection.insertMany(docs);
      //   console.log('Inserted documents =>', insertResult);
      // }
      // catch(error){
      //   console.log(error);
      // }

      // for finding
      // const findResult = await client.db("varame").collection("tbname").find({}).toArray();
      const findResult = await collection.find({}).toArray();
      console.log('Found documents =>', findResult);

      // Ensures that the client will close when you finish/error
      await client.close();
  }
}
run().catch(console.dir);
