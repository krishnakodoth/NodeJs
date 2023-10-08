import express from "express";
import bodyParser from "body-parser";
import controllers from "./controller";
import KafkaConfig from "./config";

const app = express();
const jsonParser = bodyParser.json();

app.post('api/send',jsonParser,controllers.sendMessageToKafka);

// consume from topic
const kafkaConfig = new KafkaConfig();
kafkaConfig.consume('my-topic',(value)=>{
    console.log("From consume",value)
})

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})