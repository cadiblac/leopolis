var nextPan = 0;
// funkcja zmieniająca zakładki
var panChange = function(){
	var panels = $('.panel-collapse');
	$(panels[nextPan]).collapse('hide');
	if (nextPan < (panels.length - 1)) {
		nextPan++;
	} else {
		nextPan = 0;
	}
	$(panels[nextPan]).collapse('show');
};
// funkcja odpowiadająca za automatyczną podmianę zakładki co 5 sekund
var panelCycle = setInterval(panChange, 5000);
// obsługa kliknięcia: anuluje działanie automatycznego zmieniania, zamyka wszystkie (czyli w praktyce, tę która jest aktualnie otwarta) i otwiera klikniętą
$(function(){
	$('.panel-title > a').click(function(e) {
		e.preventDefault();
		// Stop the cycle
		clearInterval(panelCycle);
		$('.panel-collapse').collapse('hide');
		$(this).collapse('show');
	});
});