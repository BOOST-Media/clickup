const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);
let db = null;

const init = async () => {
  try {
    await client.connect();
    console.log("MongoDB successfully connected...");
  } catch (error) {
    console.log(error);
  }

  db = client.db("clickup");
};

const getClient = () => {
  return client;
};

const getDB = () => {
  return db;
};

module.exports.init = init;
module.exports.getClient = getClient;
module.exports.getDB = getDB;
