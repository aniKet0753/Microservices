import { Kafka } from "kafkajs";

export const kafka = new Kafka({
  clientId: "email",
  brokers:["localhost:9092"],//change this to real hosted kafka server
});