import express from 'express';
import os from 'node:os';
import config from './config';

const server = express();
server.use(express.static("dist"));
server.set("view engine","ejs");

server.use("/",(req,res)=>{
    // res.send("hello !")
    // res.render("index");
    res.render("index",{
        content:"<p> EJS Content ! </p>"
    });
})

console.log(typeof(config.PORT))
server.listen(Number(config.PORT),config.HOST,() => {
    console.info(
        `Express server is listening at ${config.SERVER_URL}`,
        `Free Mem : ${os.freemem() / 1024 / 1024}`
    )
})