//my array of topics
var topics = 	["john wick 3", "pokemon detective", "avengers end game", "men in black international", "star wars galaxy's edge", 
				"captain marvel","downtown abbey","lego movie 2","dark phoenix"];



function magicButton() {

	//empties the div so all the buttons can be rewritten whenever a new array index is included
	$("#movie-buttons").empty();

	for (var i = 0; i < topics.length; i++) {
		$("#movie-buttons").append("<button type=button class='topic-button btn btn-primary'>" + topics[i] + "</button>");
	};


};


magicButton();




//on-clicik event to accept user's input, append it to the topics array,
//and turn the input into a new button
$("#additional").on("click", function(event) {
	event.preventDefault();
	var userInput = $("#2019-input").val().trim();

	//if the text input is empty, a new button should NOT be created
	if (!userInput == " ") {
		topics.push(userInput);
		magicButton();
		console.log(topics); //test
		userInput = $("#2019-input").val(" ");
	}
});

$(document).on("click", ".topic-button", function() {
	$("#movie-gif").empty(); //empties out previous gifs

	var apiKey = "BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9";
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $(this).html() + "&api_key=" + apiKey + "&limit=10";
	

	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response){
		console.log(response.data); //test

		var results = response.data;

		//creates a new <img> tag
		for (var j = 0; j < results.length; j++) {

			var newImage = $("<img>");
			newImage.attr("src", results[j].images.fixed_height_still.url);
			newImage.attr("alt", "missing gif");
			newImage.attr("id", "new-gif" + j);

			$("#movie-gif").append(newImage);

			
		}
		//when you click on the gif, it needs to go from fixed_height_still.url to fixed_height.url 
		//gif #0
		var isMoving0 = false;
		$(document).on("click", "#new-gif0" , function() {

			if (!isMoving0) {
				$("#new-gif0").attr("src", results[0].images.fixed_height.url); //makes the gif move
				isMoving0 = true;
			} else {
				$("#new-gif0").attr("src", results[0].images.fixed_height_still.url); //makes the gif stop
				isMoving0 = false;
			}

		});

		//gif #1
		var isMoving1 = false;
		$(document).on("click", "#new-gif1" , function() {

			if (!isMoving1) {
				$("#new-gif1").attr("src", results[1].images.fixed_height.url); //makes the gif move
				isMoving1 = true;
			} else {
				$("#new-gif1").attr("src", results[1].images.fixed_height_still.url); //makes the gif stop
				isMoving1 = false;
			}

		});

		//gif #2
		var isMoving2 = false;
		$(document).on("click", "#new-gif2" , function() {

			if (!isMoving2) {
				$("#new-gif2").attr("src", results[2].images.fixed_height.url); //makes the gif move
				isMoving2 = true;
			} else {
				$("#new-gif2").attr("src", results[2].images.fixed_height_still.url); //makes the gif stop
				isMoving2 = false;
			}

		});

		//gif #3
		var isMoving3 = false;
		$(document).on("click", "#new-gif3" , function() {

			if (!isMoving3) {
				$("#new-gif3").attr("src", results[3].images.fixed_height.url); //makes the gif move
				isMoving3 = true;
			} else {
				$("#new-gif3").attr("src", results[3].images.fixed_height_still.url); //makes the gif stop
				isMoving3 = false;
			}

		});


		//gif #4
		var isMoving4 = false;
		$(document).on("click", "#new-gif4" , function() {

			if (!isMoving4) {
				$("#new-gif4").attr("src", results[4].images.fixed_height.url); //makes the gif move
				isMoving4 = true;
			} else {
				$("#new-gif4").attr("src", results[4].images.fixed_height_still.url); //makes the gif stop
				isMoving4 = false;
			}

		});


		//gif #5
		var isMoving5 = false;
		$(document).on("click", "#new-gif5" , function() {

			if (!isMoving5) {
				$("#new-gif5").attr("src", results[5].images.fixed_height.url); //makes the gif move
				isMoving5 = true;
			} else {
				$("#new-gif5").attr("src", results[5].images.fixed_height_still.url); //makes the gif stop
				isMoving5 = false;
			}

		});


		//gif #6
		var isMoving6 = false;
		$(document).on("click", "#new-gif6" , function() {

			if (!isMoving6) {
				$("#new-gif6").attr("src", results[6].images.fixed_height.url); //makes the gif move
				isMoving6 = true;
			} else {
				$("#new-gif6").attr("src", results[6].images.fixed_height_still.url); //makes the gif stop
				isMoving6 = false;
			}

		});


		//gif #7
		var isMoving7 = false;
		$(document).on("click", "#new-gif7" , function() {

			if (!isMoving7) {
				$("#new-gif7").attr("src", results[7].images.fixed_height.url); //makes the gif move
				isMoving7 = true;
			} else {
				$("#new-gif7").attr("src", results[7].images.fixed_height_still.url); //makes the gif stop
				isMoving7 = false;
			}

		});


		//gif #8
		var isMoving8 = false;
		$(document).on("click", "#new-gif8" , function() {

			if (!isMoving8) {
				$("#new-gif8").attr("src", results[8].images.fixed_height.url); //makes the gif move
				isMoving8 = true;
			} else {
				$("#new-gif8").attr("src", results[8].images.fixed_height_still.url); //makes the gif stop
				isMoving8 = false;
			}

		});


		//gif #9
		var isMoving9 = false;
		$(document).on("click", "#new-gif9" , function() {

			if (!isMoving9) {
				$("#new-gif9").attr("src", results[9].images.fixed_height.url); //makes the gif move
				isMoving9 = true;
			} else {
				$("#new-gif9").attr("src", results[9].images.fixed_height_still.url); //makes the gif stop
				isMoving9 = false;
			}

		});


	});



})




