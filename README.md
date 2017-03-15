# HW_GifTastic
Homework assignment #6

## Live Link 
 - https://jpannewitz.github.io/HW_GifTastic/

## Description on how to use the app
Click on any superhero button to see 10 non-animated gifs. Click on a gif to make it animate, then click on it again to make it static.

Add another superhero by submitting a name in the "Add A Hero" form.  Click "Submit" and your hero will have it's own button. You can now view 10 gifs of your favorite superhero!

## Requirements

-Create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.

-Your app should take the topics in this array and create buttons in your HTML.
Try using a loop that appends a button for each string in the array.

-When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

-When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

-Under every gif, display its rating (PG, G, so on). This data is provided by the GIPHY API.

-Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.

## Technologies Used

- HTML, Bootstrap & CSS for the layout
- Javascript/JQuery to dynamically update HTML
- Giphy API to generate gifs

## Code Explaination
- First created basic HTML with that could be called upon in the Javascript file
- Created a function that would render buttons by looping through strings in "topic" array.
- Used an on-click function for dynamic objects that would generate 10 gifs from the Giphy API when any button with class "hero-Button" is clicked
-Used an on-click function for dynamic objects that would animate and then make the gif status when any image with class "gif" is clicked
-Created a function that would take user input from form to create new buttons

-------------