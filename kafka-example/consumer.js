const { Kafka } = require('kafkajs');

async function consumeMessages() {
  // Create a Kafka instance
  const kafka = new Kafka({
    clientId: 'my-kafka-app',
    brokers: ['localhost:9092'] // Replace with your Kafka broker(s) address
  });

  // Create a consumer
  const consumer = kafka.consumer({ groupId: 'my-group' }); // Replace with your consumer group name

  // Connect to the Kafka broker
  await consumer.connect();

  // Subscribe to the topic(s)
  await consumer.subscribe({ topic: 'my-topic', fromBeginning: true }); // Replace with your topic name

  // Start consuming messages
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`Received message: ${message.value}`);
    }
  });
}

consumeMessages().catch(console.error);
