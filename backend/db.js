const mongoose = require("mongoose");
const { MONGODB_URI } = require("./config");

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

const connectToMongo = async () => {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(MONGODB_URI, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
};

module.exports = connectToMongo;
