var socket = io();
socket.on('connect', function(){
	console.log("conectado al servidor");
});

socket.on('disconnect', function(){
	console.log('Perdimos conexion con el servidor');
});

socket.emit('enviarMensaje', {
	usuario: 'Pablo',
	mensaje: 'Hola mundo'
}, function(resp){
	console.log(resp);
});

socket.on('enviarMensaje', function(mensaje) {
	console.log('Servidor: ', mensaje);
});