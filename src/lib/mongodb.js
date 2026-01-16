import { MongoClient } from "mongodb";

export async function connectDB() {
  const uri = process.env.MONGO_URI;
  const client = new MongoClient(uri);

  await client.connect();
  const db = client.db("Postly");

  console.log("MongoDB connected");
  return db;
}