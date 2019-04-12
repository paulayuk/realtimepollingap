const express = require('express')
const app = express()


//middlewares
app.use(express.static('public'))


//Listen on port 3000
server = app.listen(3000);

const progLang = [ {
	                "title": "Js",
	                "language": "JavaScript",
	                "value": Math.floor(Math.random() * 20),
	                "userColor": "blue"
	            }, {
	                "title": "php",
	                "language": "PHP",
	                "value": Math.floor(Math.random() * 20),
	                "userColor": "yellow"
	            }
	            ];



const io = require("socket.io")(server)


io.sockets.on('connection', function (socket) {
       socket.on('vote', (data) => {   
          var votedata =  {};

          if(data === "react"){
              var votedata =  {
                   "value": [10, 0],
               };            
          }else if(data === "jquery"){
               var votedata =  {
                   "value": [0, 10],
               };
          }

        io.sockets.emit('updateChart', votedata);          
       });
});



