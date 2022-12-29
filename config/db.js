const mongoose = require('mongoose')
//had to remove the options as they are not supported or used in this version
const connectDB = async () => {
  mongoose.set('strictQuery', true);
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB 