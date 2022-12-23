/* curl --request POST \
  'https://data.mongodb-api.com/app/data-abcde/endpoint/data/v1/action/insertOne' \
  --header 'Content-Type: application/json' \
  --header 'api-key: TpqAKQgvhZE4r6AOzpVydJ9a3tB1BLMrgDzLlBLbihKNDzSJWTAHMVbsMoIOpnM6' \
  --data-raw '{
      "dataSource": "Cluster0",
      "database": "learn-data-api",
      "collection": "hello",
      "document": {
        "text": "Hello from the Data API!",
      }
  }' */
import axios from "axios";
import config from "../config";

export const insertValue = async (table, key) => {
  const response = await axios.post(
    `${config.mongoConfig.dbNetwork}insertOne`,
    {
      dataSource: config.mongoConfig.dbSource,
      database: config.mongoConfig.dbName,
      collection: "users",
      document: {
        id: 1,
      },
    },
    {
      Headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "api-key": config.mongoConfig.dbAPIKey,
      },
    }
  );
  return response;
};

/**
 *
 * @param {string} table
 * @param {string} key
 * @returns
 */
export const getValue = async (table, key) => {
  const response = await axios.post(
    `${config.mongoConfig.dbNetwork}findOne`,
    {
      dataSource: config.mongoConfig.dbSource,
      database: config.mongoConfig.dbName,
      collection: table,
      projection: { id: 1 },
    },
    {
      Headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "api-key": config.mongoConfig.dbAPIKey,
      },
    }
  );
  return response;
};
