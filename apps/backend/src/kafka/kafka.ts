import { Kafka } from "kafkajs";

export const kafka = new Kafka({
  clientId: "email",
  brokers:["localhost:9092"],
});