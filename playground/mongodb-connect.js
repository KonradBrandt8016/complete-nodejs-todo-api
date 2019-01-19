// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

let obj = new ObjectID();
console.log(obj);

MongoClient.connect(
  "mongodb://localhost:27017/Todos",
  (err, client) => {
    if (err) return console.log("Unable to connect to MongoDB server", err);
    console.log("Connected to MongoDB server");

    const db = client.db("Todos");

    const konradTask = { text: "Get printing from Minuteman Press" };

    // client.collection("items").insertOne(konradTask, (err, result) => {
    //   if (err) {
    //     return console.log("Unable to insert item", err);
    //   }
    //   console.log(JSON.stringify(konradTask), "inserted successfully");
    //   console.log(JSON.stringify(result.ops));
    // });
    sdf;
    const userToInsert = {
      name: "Konrad",
      age: "33",
      location: ["Unit 29", "Norma Jean Square", "Die Hoewes", "Centurion"]
    };

    client.collection("users").insertOne(userToInsert, (err, result) => {
      if (err) return console.log("insertOne error:", err);
      console.log(JSON.stringify(result.ops), "inserted successfully");
    });

    client.close();
  }
);
