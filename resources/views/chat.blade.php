<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <script src="//{{ Request::getHost() }}:3000/socket.io/socket.io.js"></script>
        <!--<script src="/socket.io/socket.io.js"></script>-->
        
        <script src="https://code.jquery.com/jquery-1.11.1.js"></script>
    <script>
        $(function () {
            console.log("ready")
            var token =""
            var socket = io('http://{{ Request::getHost() }}:3000');
            
            socket.on('first_connect', function(msg){
                
                if(token==""){
                    console.log(msg)
                    token = msg
                }
                
            });
            


            $('form').submit(function(){
                let data ={};
                data.token = token;
                data.msg = $('#m').val()
                socket.emit('chat message', JSON.stringify(data));
                $('#m').val('');
                return false;
            });
            socket.on('chat message', function(data){
                console.log(data)
                let data1 =JSON.parse(data)
                
                $('#messages').append($('<li>').text(data1.msg));
            });
            $( "#m" ).on( "focus", function(){
                console.log(token)
                let data ={};
                data.token = token;
                data.check = true
                socket.emit('check', JSON.stringify(data));
                
            })
            $( "#m" ).on( "focusout", function(){
                let data ={};
                data.token = token;
                data.check = false
                socket.emit('check', false);
                
            })
            socket.on('check', function(data){
                let check =JSON.parse(data)
                // console.log(check)
                console.log(check.token)
                console.log(token)
                if(check.check && check.token !=token){
                    $("#m").attr("placeholder","กำลังพิมพ์")
                }else{
                    $("#m").attr("placeholder","")
                }
            });
           
            
           
        });
    </script>
        <!-- Styles -->
        <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font: 13px Helvetica, Arial; }
      form { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }
      form input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }
      form button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
      #messages { list-style-type: none; margin: 0; padding: 0; }
      #messages li { padding: 5px 10px; }
      #messages li:nth-child(odd) { background: #eee; }
    </style>
    </head>
    <body>
       <ul id="messages"></ul>
        <form action="">
        <input id="m" autocomplete="off" placeholder="" /><button>Send</button>
        </form>
    </body>
</html>
