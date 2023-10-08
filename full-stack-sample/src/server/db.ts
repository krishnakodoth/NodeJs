import { MongoClient } from 'mongodb';
import { MONGODB_URI, DB_NAME } from './config';

let connectedClient:MongoClient;
export const connectClient = async () => {
    if(connectedClient){
        return connectedClient;
    }
    connectedClient = new MongoClient(MONGODB_URI);
    await connectedClient.connect();
    await connectedClient.db(DB_NAME).command({ ping: 1 });
    console.log("Connected to MongoDB");
    return connectedClient.db(DB_NAME);

}
export const stopClient = async () => {
    await connectedClient ?? connectedClient.close();
}