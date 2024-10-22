/*

Path module const path=require('path'); //it is better to use const to avoid overriding the package value
let pathobj= path.parse(__filename);
console.log(pathobj); 

*/

/* 
OS module 
const os = require('os');
let freememory =  os.freemem();
let totalmemory = os.totalmem();
console.log('free Memory:'+freememory);
console.log('total Memory:'+totalmemory);

*/


/* File System module
const fs = require('fs');
const files=fs.readdirSync('./');
console.log(files);
fs.readdir('./',function(err,files){
    if (err) console.log("ERROR",err);
    else console.log('Result',files);
});
*/


/*
Events module
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('logging',(arg)=>{
    console.log("listner called",arg);
})
emitter.emit('logging',{id:1,username:'thanusik'});

*/

/*
Event module Using Class
const Logger = require('./logger');
const logger = new Logger();
logger.on('logging',(arg)=>{
    console.log("listner called",arg);
});
logger.log('message');
*/
const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/api'){
        res.write('hello world');
        res.end();
    }
    if(req.url==='/api/courses'){
        res.write('My world');
        res.end();
    }

});
server.listen(3000);
console.log('listening on port 3000...');