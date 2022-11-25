import mongoose from "mongoose";

export async function connection(): Promise<void> {
  const url = process.env.dbUrl;
  const dbName = process.env.dbName;

  console.info("Connecting to database...");

  try {
    if (url) {
      mongoose.set("debug", true);
      await mongoose.connect(String(url), {
        dbName,
        retryReads: true,
        retryWrites: true,
        connectTimeoutMS: 10000,
      });
    }
  } catch (error: Error | any) {
    throw new Error("Connection failed");
  }
  console.log("Connected to database");
}
