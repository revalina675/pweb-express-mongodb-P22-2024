// db-connection.mjs
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config(); 

const connectionString = process.env.MONGODB_URI; // ambil URI dari .env
const client = new MongoClient(connectionString);
let conn;

try {
  conn = await client.connect();
  console.log("Connected to MongoDB");
} catch (e) {
  console.error("MongoDB connection failed:", e);
}

let db = conn.db("libraryp22"); // nama database Anda
export default db; // ekspor objek database
