import mongoose, { Connection } from 'mongoose';

const MONGO = process.env.MONGODB_URI as string;

if (!MONGO) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

// Define a global object to store the cached connection
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null as Connection | null,
    promise: null as Promise<Connection | null> | null
  };
}

export default async function connect(): Promise<Connection> {
  if (cached.conn) {
    return cached.conn;
  }

  // If a connection does not exist, we check if a promise is already in progress. If a promise is already in progress, we wait for it to resolve to get the connection
  if (!cached.promise) {
    const opts = {
      bufferCommands: false
      // dbName: 'records'
    };

    cached.promise = mongoose.connect(MONGO, opts).then((mongoose) => {
      return mongoose.connection;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn as Connection;
}
