var socket = io();

socket.on('score', (home, away)=>{
	$('#homescore').text(home);
	$('#awayscore').text(away);
});