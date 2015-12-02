// funkcja zmieniająca zakładki
var tabChange = function(){
	var tabs = $('.nav-tabs > li');
	var active = tabs.filter('.active');
	var pasek = $('.pasek'); // animowany pasek postępu
	$(".pasek").remove();
	var next = active.next('li').length? active.next('li').find('a') : tabs.filter(':first-child').find('a');
	next.tab('show');
	next.prepend(pasek);
}
// funkcja odpowiadająca za automatyczną podmianę zakładki co 5 sekund
var tabCycle = setInterval(tabChange, 5000);
// obsługa kliknięcia: anuluje działanie automatycznego zmieniania, usuwa na stałe pasek postępu i otwiera klikniętą zakładkę
$(function(){
	$('.nav-tabs a').click(function(e) {
		e.preventDefault();
		clearInterval(tabCycle);
		$(".pasek").remove();
		$(this).tab('show');
	});
});