import { MongoClient } from "mongodb";

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "siclad";

const clean = async () => {
  // Use connect method to connect to the server
  await client.connect();
  const db = client.db(dbName);
  await db.collection("patient").deleteMany({});
  await db.collection("result").deleteMany({});
};

/**
 *
 * @param {string} table
 * @param {object} value
 * @returns
 */
const insert = async (table, value) => {
  // Use connect method to connect to the server
  await client.connect();
  const db = client.db(dbName);
  const insertResult = await db.collection(table).insertMany([{ ...value }]);
  console.log("Inserted documents =>", insertResult);
};

/**
 *
 * @param {string} table
 * @param {string} key
 * @param {object} value
 * @returns
 */
const update = async (table, key, value) => {
  // Use connect method to connect to the server
  await client.connect();
  const db = client.db(dbName);
  const updateResult = await db
    .collection(table)
    .updateOne({ code: key }, { $set: { ...value } });
  console.log("Updated documents =>", updateResult);
};

/**
 *
 * @param {string} table
 * @param {string} key
 * @returns
 */
const getValue = async (table, key) => {
  // Use connect method to connect to the server
  await client.connect();
  const db = client.db(dbName);
  const findResult = await db.collection(table).find({ code: key }).toArray();
  console.log("Found documents =>", findResult);
  return findResult[0];
};

/**
 *
 * @param {string} table
 * @returns
 */
const getTable = async (table) => {
  // Use connect method to connect to the server
  await client.connect();
  const db = client.db(dbName);
  const findResult = await db.collection(table).find({}).toArray();
  console.log("Found documents =>", findResult);
  return findResult;
};

/**
 *
 * @param {string} table
 */
const setTable = async (table) => {
  // Use connect method to connect to the server
  await client.connect();
  const db = client.db(dbName);
  await db.collection(table).deleteMany({});
};

module.exports = { clean, insert, getValue, getTable, setTable, update };
