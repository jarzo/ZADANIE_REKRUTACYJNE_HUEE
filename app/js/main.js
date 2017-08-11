"use strict";
$(function () {
	//	console.log("jestem");
	/*Zmienne*/
	var slideCount = $(".single-slide").length;
	var slideShow = $(".slide-show");
	var slideWidth = 100 / slideCount;
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

		//		console.log(newSlideIndex);

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
	//	console.log("jestem");
	/*Zmienne*/
	var slideCount = $(".single-slide-opinie").length;
	var slideShow = $(".slide-show-opinie");
	var slideWidth = 100 / slideCount;
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

		//		console.log(newSlideIndex);

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

var zgoda = document.getElementById("zgoda");

var inputImie = document.getElementById("imie");

var inputNazwisko = document.getElementById("nazwisko");

var inputEmail = document.getElementById("email");

var pobierzBtn = document.getElementById("wyslij");

var wiadomosc = document.getElementById("wiadomosc");


function walidujFormularz(event) {
	console.log("jestem w funkcji");
	//	wiadomosc.innerHTML = "<ul id="wiadomosc"></ul>";


	if (inputEmail.value.trim() == "") {
		var msgEmail = document.createElement("li");
		msgEmail.innerHTML = "Wpisz Email!";
		wiadomosc.appendChild(msgEmail);

//		inputEmail.style.backgroundColor = "red";
		event.preventDefault();
	}

	if (inputImie.value.trim() == "") {
		var msgImie = document.createElement("li");
		msgImie.innerHTML = "Wpisz Imie!";
		wiadomosc.appendChild(msgImie);
//		inputImie.style.backgroundColor = "red";

		event.preventDefault();
	}

	if (inputNazwisko.value.trim() == "") {
		var msgNazwisko = document.createElement("li");
		msgNazwisko.innerHTML = "Wpisz Nazwisko!";
		wiadomosc.appendChild(msgNazwisko);
//		inputNazwisko.style.backgroundColor = "red";

		event.preventDefault();
	}

//	if (!zgoda.checked) {
//		var msgZgoda = document.createElement("li");
//		msgZgoda.innerHTML = "Musisz wyrazić zgode!";
//		wiadomosc.appendChild(msgZgoda);
//
//		event.preventDefault();
//	}



}

pobierzBtn.addEventListener("click", walidujFormularz);