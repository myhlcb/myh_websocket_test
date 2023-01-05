const http = require('http')
const fs = require('fs')
const index = fs.readFileSync('./io.html');
const app = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
});
const io  = require('socket.io')(app)
io.on('connection',server=>{
    console.log('client connect')
    server.emit('welcome',{
        msg:'床前明月光'
    })
    server.on('client_chat_message',(msg)=>{
       console.log(`get client msg:${msg}`)
       io.emit('server_chat_message',msg) //这里要用io
    })
    server.on('disconnect',()=>{
        console.log('close')
    })
})


app.listen(3000,()=>{
    console.log('server start 3000')
})