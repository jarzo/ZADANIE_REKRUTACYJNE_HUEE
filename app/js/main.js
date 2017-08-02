"use strict";
$(function(){
	console.log("jestem");
	/*Zmienne*/
	var slideCount = $(".single-slide").length;
	var slideShow = $(".slide-show");
	var slideWidth = 100/slideCount;//lub =$(single-slide)
	var slideIndex = 0;
	
	
	/*Szerokość kontenera*/
	slideShow.css("width", slideCount * 100 + "%");
//	console.log(slideCount);
	
	/*Szerokość slaidu i jego połozenie (margines miedzy nimi)*//*Moje!!! dobrze*/
	//100% podzielić przez ilość stajdów i to będzie szerokość jednego obrazka
	/*slideWidth.each(function () {
	   slideWidth.css({"width", 100/ slideCount + "%","margin-left": index * slideWidth + "%"  })});
		*/
	
		/*lub*/
		
/*	Szerokosc slaidu i jego położenie*/	
		$(".single-slide").each(function (index){
//			console.log("test");
//			console.log("index");
			$(this).css({"width": slideWidth + "%", "margin-left": index * slideWidth + "%" });
		});
		
	
	/*Funkcjia slide*/
	function slide(newSlideIndex) {
		
		console.log(newSlideIndex);
		
		if(newSlideIndex < 0 || newSlideIndex >= slideCount) {
			return;
		}
		
		var marginLeft = (newSlideIndex * (-100)) + "%";
		slideShow.animate({"margin-left": marginLeft},800,function() {
			slideIndex = newSlideIndex;
		});
		
	};
		
	/*Klikniecie strzałki*/
	$(".prev-slide").click(function() {
		event.preventDefault();
		slide(slideIndex - 1);
		
		/*Przeniesione do funkcji na górze i połączenie z drugą strzałką*/
		/*var newSlideIndex = slideIndex - 1;*/
	
		/*Zatrzymanie funkcji przewijania slidów*/
	/*	if(newSlideIndex < 0) {
				return;
		};
		
		var marginLeft = (newSlideIndex * (-100)) + "%";
			
			slideShow.animate({"margin-left": marginLeft},800,function() {
				
				
			slideIndex = newSlideIndex;
				
			console.log(marginLeft);
		*/
		
			
		});
		
//	});
	
	$(".next-slide").click(function() {
		
		event.preventDefault();
		console.log('newSlideIndex');
		slide( slideIndex + 1);
		
		
		/*Przeniesione do funkcji na górze i połączenie z drugą strzałką*/
		/*var newSlideIndex = slideIndex + 1;
		
//		Zatrzymanie funkcji przewijania slidów
		if(newSlideIndex >= slideCount) {
				return;
		};
		
		var marginLeft = (newSlideIndex * (-100)) + "%";
		
		slideShow.animate({"margin-left":marginLeft},800,function() {
			slideIndex = newSlideIndex;
		
		console.log(marginLeft);*/
			
			
		});
		
//	});
	
	/*Klikniecie strzałki*/
	
	
	
	
	
	/*Przesyunięcie slaidu -obsługa eventu , onclick strzałka w lewo i prawo*/
	/*W momęcie kliknięcia strzałki index zwiększ się o 1, margin mnożymy, parametr + 1 , przesunięcie 0-100%*/
	
});

