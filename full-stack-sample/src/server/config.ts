const env = process.env;

export const PORT = env.PORT ? env.PORT : "3030";
export const HOST = env.HOST ? env.HOST : "localhost";
export const SERVER_URL = `http://${HOST}:${PORT}`;

export const MONGODB_URI = env.MONGODB_URI ?  env.MONGODB_URI : "mongodb://localhost:27017";
export const DB_NAME = env.DB_NAME ?  env.DB_NAME : "local";

export default {
    PORT, HOST, SERVER_URL, MONGODB_URI, DB_NAME
};