import "dotenv/config";
import { kafka } from "./kafka.js";
import { sendUserDetails } from "../email/email.service.js";

// Creating consumer
const consumer = kafka.consumer({
  groupId: "sendEmail-to-user",
});

// Connecting Kafka consumer
export const connectConsumer = async () => {
  await consumer.connect();
  console.log("Kafka consumer is connected successfully");

  // Subscribing to email topic
  await consumer.subscribe({
    topic: "email",
    fromBeginning: false,
  });

  // Start listening for messages
  await consumer.run({
    eachMessage: async ({ message }) => {

      // Kafka ke Buffer ko normal string mein convert karo
      if (!message.value) {
        return;
      }

      // String ko JavaScript object mein convert karo
      const event = JSON.parse(
        message.value.toString()
      );

      // Check karo ki event user.created hai
      if (event.event === "user.created") {

        // Email service ko user ka data bhejo
        await sendUserDetails({
          firstName: event.firstName,
          lastName: event.lastName,
          email: event.email,
          role: event.role,
        });
      }
    },
  });
};