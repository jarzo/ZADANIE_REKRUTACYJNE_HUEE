"use strict";
$(function () {
	console.log("jestem");
	/*Zmienne*/
	var slideCount = $(".single-slide").length;
	var slideShow = $(".slide-show");
	var slideWidth = 100 / slideCount; //lub =$(single-slide)
	var slideIndex = 0;


	/*Szerokość kontenera*/
	slideShow.css("width", slideCount * 100 + "%");
	//	console.log(slideCount);



	/*	Szerokosc slaidu i jego położenie*/
	$(".single-slide").each(function (index) {
		//			console.log("test");
		//			console.log("index");
		$(this).css({
			"width": slideWidth + "%",
			"margin-left": index * slideWidth + "%"
		});
	});


	/*Funkcjia slide*/
	function slide(newSlideIndex) {

		console.log(newSlideIndex);

		if (newSlideIndex < 0 || newSlideIndex >= slideCount) {
			return;
		}

		var marginLeft = (newSlideIndex * (-100)) + "%";
		slideShow.animate({
			"margin-left": marginLeft
		}, 800, function () {
			slideIndex = newSlideIndex;
		});

	};

	/*Klikniecie strzałki*/
	$(".prev-slide").click(function () {
		event.preventDefault();
		slide(slideIndex - 1);




	});



	$(".next-slide").click(function () {

		event.preventDefault();
		console.log('newSlideIndex');
		slide(slideIndex + 1);





	});



});

$(function () {
	console.log("jestem");
	/*Zmienne*/
	var slideCount = $(".single-slide-opinie").length;
	var slideShow = $(".slide-show-opinie");
	var slideWidth = 100 / slideCount; //lub =$(single-slide)
	var slideIndex = 0;


	/*Szerokość kontenera*/
	slideShow.css("width", slideCount * 100 + "%");
	//	console.log(slideCount);



	/*	Szerokosc slaidu i jego położenie*/
	$(".single-slide-opinie").each(function (index) {
		//			console.log("test");
		//			console.log("index");
		$(this).css({
			"width": slideWidth + "%",
			"margin-left": index * slideWidth + "%"
		});
	});


	/*Funkcjia slide*/
	function slide(newSlideIndex) {

		console.log(newSlideIndex);

		if (newSlideIndex < 0 || newSlideIndex >= slideCount) {
			return;
		}

		var marginLeft = (newSlideIndex * (-100)) + "%";
		slideShow.animate({
			"margin-left": marginLeft
		}, 800, function () {
			slideIndex = newSlideIndex;
		});

	};

	/*Klikniecie strzałki*/
	$(".prev-slide").click(function () {
		event.preventDefault();
		slide(slideIndex - 1);




	});



	$(".next-slide").click(function () {

		event.preventDefault();
		console.log('newSlideIndex');
		slide(slideIndex + 1);





	});



});

