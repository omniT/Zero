var io = require('socket.io').listen(7000);

var vs = io.of('/viewer').on('connection', function(socket){
    console.log("New viewer connected: " + socket.id);
    //socket.emit('message', {'message': 'hello world'});
	socket.on('disconnect', function(socket){
	console.log("Viewer disconnected");
	});
});