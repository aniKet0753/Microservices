import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {type: String, required:true},
  firstName: {type: String, required: true},
  lastNmae: {type:String, required: true},
  role: {type: String, enum: ["ADMIN","SUPERADMIN"], default:"TESTADMIN"}
},{timestamps:true})

const Users = mongoose.model("Users",userSchema)

export default Users;