const mongoose = require("mongoose")

// function mongodb database connection
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to Db ${mongoose.connection.host}`)
    }
    catch (error) {
        console.log("DB error", error);
    }
}

module.exports = connectDb;