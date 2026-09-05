import dotenv from "dotenv";
dotenv.config()
import express from 'express';

const app =express();

app.use(express.json());

app.use("/",(req,res)=>{
  res.json({
    message:"server is running"
  })
})

const PORT=process.env.PORT;
app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}`);
})