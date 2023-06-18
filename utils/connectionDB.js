import mongoose from "mongoose";

async function connectDB() {
  if (mongoose.connections[0].readyState) return;
  mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb://kamyar:12345@ac-5uphs4k-shard-00-00.7agse52.mongodb.net:27017,ac-5uphs4k-shard-00-01.7agse52.mongodb.net:27017,ac-5uphs4k-shard-00-02.7agse52.mongodb.net:27017/?ssl=true&replicaSet=atlas-pfrs1b-shard-0&authSource=admin&retryWrites=true&w=majority");
  console.log("Connected to DB");
}

export default connectDB;