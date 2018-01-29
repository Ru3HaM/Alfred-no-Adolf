$(document).ready(function() {

	var heroSpeech = 'Do you know da way?!';

	$('.js-showHide').click(function() {
		$('.hero').toggleClass('-invisible')
	});
	$('.js-hello').click(function() {
		$('.bubble').text('do you know da way?!');
	});	
});