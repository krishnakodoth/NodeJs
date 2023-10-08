const { Kafka } = require('kafkajs');

async function produceMessage() {
  // Create a Kafka instance
  const kafka = new Kafka({
    clientId: 'my-kafka-app',
    brokers: ['localhost:9092'] // Replace with your Kafka broker(s) address
  });

  // Create a producer
  const producer = kafka.producer();

  // Connect to the Kafka broker
  await producer.connect();

  // Produce a message
  await producer.send({
    topic: 'my-topic', // Replace with your topic name
    messages: [
      { value: 'Hello Kafka!' }
    ]
  });

  // Disconnect the producer
  await producer.disconnect();
}

produceMessage().catch(console.error);
