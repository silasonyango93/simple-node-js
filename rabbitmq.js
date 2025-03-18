const amqp = require("amqplib");

const RABBITMQ_URL = "amqp://localhost"; // Update this if RabbitMQ is hosted remotely

async function connectRabbitMQ() {
  try {
    const connection = await amqp.connect(RABBITMQ_URL);
    console.log("Connected to RabbitMQ");

    const channel = await connection.createChannel();
    console.log("RabbitMQ channel created");

    return { connection, channel };
  } catch (error) {
    console.error("Error connecting to RabbitMQ:", error);
  }
}

module.exports = { connectRabbitMQ };
