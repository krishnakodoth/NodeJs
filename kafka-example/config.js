import {kafka} from "kafkajs";

class KafkaConfig{
    constructor(){
        this.kafka = new kafka({
            clientId:"nodejs-kafka",
            brokers:['localhost:9003']
        });
        this.producer = this.kafka.producer();
        this.consumer = this.kafka.consumer();
    }

    async produce(topic,emssages){
        try{
            await this.producer.connect();
            await this.producer.send({
                topic,
                messages
            })
        }
        catch(err){
            console.log(err);
        }
        finally{
            await this.producer.disconnect();
        }
    }

    async consume(topic,callback){
        try{
            await this.consumer.connect();
            await this.consumer.subscribe({
                topic,
                fromBeginning:true
            })
            await this.consumer.run({
                eachMessage: async ({topic,partition,message}) => {
                    const value = message.value.toString();
                    callback(value);
                }
            })
        }
        catch(err){
            console.log(err);
        }
    }
}
export default KafkaConfig;