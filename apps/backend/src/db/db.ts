import mongoose from "mongoose"

const connectDb = async ()=>{
try {
  mongoose.connection.on('connected', ()=> console.log("you are connected to the database"))
  await mongoose.connect(process.env.MONGODB_URL!)
} catch (error) {
  console.error("Database connection failed : ", error)
}
}
export default connectDb