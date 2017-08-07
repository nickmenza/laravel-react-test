var app = require('express')();
var http = require('http').Server(app);
var port = process.env.PORT || 3000;
var io = require('socket.io')(http);

// app.get('/', function(req, res){
// //   res.sendFile(__dirname + '/index.html');
//     res.send("heee");
// });

io.on('connection', function(socket){
  console.log('a user connected');
  console.log("test")
  var token = ''
  io.clients((error, clients) => {
    if (error) throw error;
    var clients_new = []
    clients_new = clients;
    token = clients[clients_new.length-1]
    console.log('clients',clients); 
    console.log("token",token)
    io.emit('first_connect', token);
  });


  socket.on('chat message', function(data){
        // io.emit('chat message', data);
        console.log('message: ' + data);
        
  });
  
  socket.on('check', function(msg){
    io.emit('check', msg);
   
     
  });
  socket.emit('chat message', '{"msg":"test111"}');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


http.listen(port, function(){
  console.log('listening on *:'+port);
});