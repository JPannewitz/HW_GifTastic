var topic = ["superman", "batman", "the flash", "green lantern", "aquaman"];
      

function renderButtons() {

	$("#superheroButtons").empty();

    for (var i = 0; i < topic.length; i++) {

        var heroButton = $("<button>");
        heroButton.addClass("hero-Button");
        heroButton.attr("data-hero", topic[i]);
        heroButton.text(topic[i]);
        heroButton.addClass("btn btn-primary");
        $("#superheroButtons").append(heroButton);

    };
};

$("#addHero").on("click", function(event) {
        
    event.preventDefault();

    var newHero = $("#heroInput").val().trim();
	topic.push(newHero);
	$("#heroInput").empty()
	renderButtons();
}); 

renderButtons();

$(document.body).on("click", ".hero-Button", function(event) {
 	console.log(this);
 	var hero = $(this).attr("data-hero");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        hero + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
    	url: queryURL,
        method: "GET"
    }).done(function(response) {
        console.log(response);

        var results = response.data;
     
        for (var i = 0; i < results.length; i++) {
			var heroDiv = $("<div>");
     		var rating = results[i].rating;
        	var p = $("<p>")
        	p.text(results[i].rating);
        
        	var heroImage = $("<img>");
        	heroImage.attr("src", results[i].images.fixed_height_still.url);
        	heroImage.addClass("gif").attr("data-state", "still");
        	heroImage.attr("data-animate", results[i].images.fixed_height.url);
        	heroImage.attr("data-still", results[i].images.fixed_height_still.url);
        	heroDiv.append(p);
        	heroDiv.prepend(heroImage);
        	$("#heros").prepend(heroDiv);
        
        }

    });
 	
});


$(document.body).on("click", ".gif", function(event) {
 
	var state = $(this).attr("data-state");
      
 	if (state === "still") {
      	
 		$(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});