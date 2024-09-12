import { MongoClient } from "mongodb";

const {
  MONGO_URI = 'mongodb://root:example@localhost:27017/issues?authSource=admin'
} = process.env;

console.log('[MONGO_URI]', MONGO_URI);

export const client = new MongoClient(MONGO_URI);
export const db = client.db();