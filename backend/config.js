const JWT_SECRET = process.env.JSON_WEB_TOKEN_SECRET;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/inotebook";

module.exports = { JWT_SECRET, MONGODB_URI };
