const express=require('express');
const app=express();

app.use(express.static(__dirname));

const server=require('http').createServer(app)
const io=require('socket.io')(server)

//监听客户端的链接事件

io.on('connection',socket=>{
    socket.on('paint',function(data){
        io.emit('paint',data)
    })
});
server.listen(3003)
console.log('http://127.0.0.1:3003')