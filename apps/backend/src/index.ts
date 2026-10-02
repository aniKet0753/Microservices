import dotenv from "dotenv";
dotenv.config()
import express from 'express';
import {conectProducer} from "./kafka/producer.js"
import { connectConsumer } from "./kafka/consumer.js"
import axios from "axios";
import { userdata } from "./user.js";
import connectDb from "./db/db.js"

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
  res.status(200).json({
    messgae:"server is ruuning fine"
  })
})
app.post("/kafka",userdata)

const PORT = Number(process.env.PORT) || 3001;
console.log(PORT)

await connectDb()
// await conectProducer();//startrting producer
// await connectConsumer();//starting consumer

app.listen(PORT,"0.0.0.0",()=>{
  console.log(`server is running on port ${PORT}`);
})