var socket = io();

socket.on('score', (home, away)=>{
	$('#home').val(home);
	$('#away').val(away);
});

$('input').change( ()=>{
	console.log($('#home').val());
	let x = $('#home').val();
	let y = $('#away').val();
	socket.emit('score_change', x, y);
});