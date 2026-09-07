import {kafka} from "./kafka.js";

const producer = kafka.producer();

export const conectProducer = async ()=>{
  await producer.connect();
  console.log("kafka producer is connected");
}
  type userdata={
    firstName: string,
    lastName: string,   
    email: string,
    role : string,
  }
export const sendEmail = async (userdata:userdata)=>{
 await producer.send({
  topic : "email",
  messages:[
    {
    value : JSON.stringify({
      event:"user.created",
      ...userdata
      })
    }
  ]
 })
 console.log("User created event sent to Kafka");
}