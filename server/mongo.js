// @ts-check

const mongoose = require("mongoose");

const { MONGO_PASSWORD, MONGO_CLUSTER, MONGO_USER } = require("./common");

const MONGO_URL = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}/?retryWrites=true&w=majority`;

const client = mongoose.connect(MONGO_URL);

async function connectToDatabase() {
  try {
    await client;
    console.log("MongoDB 연결 성공");
  } catch (error) {
    console.error("MongoDB 연결 실패:", error);
    throw new Error("MongoDB connection failed");
  }
}

module.exports = {
  connectToDatabase,
};
