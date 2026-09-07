import type { Request,Response } from "express"
import Users from "./db/schema.js";
import { sendEmail } from "./kafka/producer.js";

export const userdata = async(req:Request,res:Response)=>{
  try{
  const users = await Users.create({
    email: req.body.email,
    firstName: req.body.firstName,
    lastNmae: req.body.lastName,
    role: req.body.role
  });
  await sendEmail ({
    email: users.email,
    firstName: users.firstName,
    lastName: users.lastNmae,
    role: users.role,
  })
      res.status(201).json({
      message: "User created successfully",
      users,
    });
  }catch(error){
    console.log("this is an error",error);
  }
}