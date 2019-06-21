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

	var apiKey = "c64ca2f719e54ca5baaaf7946271c6e4";
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
		


	});



})




