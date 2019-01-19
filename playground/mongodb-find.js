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

    db.collection("items")
      .find()
      .toArray()
      .then(docs => console.log(JSON.stringify(docs, undefined, 2)), err => {});

    db.collection("items").findOne({ text: "Walk the dog" }, (err, result) => {
      if (err) return console.log("Error finding the document", err);
      console.log(JSON.stringify(result));
    });

    db.collection("items")
      .find()
      .count((err, count) => {
        console.log(count);
      });

    db.collection("users")
      .find({ name: "Konrad" })
      .toArray()
      .then(docs => console.log(docs));

    client.close();
  }
);
