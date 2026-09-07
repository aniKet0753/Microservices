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

app.post("/kafka",userdata)

const PORT=process.env.PORT;

await connectDb()
await conectProducer();
await connectConsumer();

app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}`);
})