
// create variable "topic" and set an array of food to it as well as foodDiv set to topics [i]
var topics = ["Ice Cream", "Sushi", "Pizza"];
// Create variables called buttonDiv and gifDiv +  assign them the button-view div and gif-view div
// Temporarily mute these variables
var buttonHoldingDiv = $("#button-view");
var gifHoldingDiv = $("#gif-view");
// Put what is typed and created as a button, inside the search box, inside the #button-view div
$("#button").on("click", function searchbox() {
  // prevent submit button from submitting when clicked.
  event.preventDefault();
  // grab text from input box
  var searchTextBox = $("#searchbox").val();
  // Create our URL
  // var queryURL = 
  var queryURL2 = "http://api.giphy.com/v1/gifs/search?q=" + searchTextBox + "&api_key=OYtCkDFHdaDGQuuEfAFwRF0wbj7eeWXD&limit=1";

  // AJAX code to Perform GET requests to the GIPHY API and logging the responses to the console
  $.ajax({
    url: queryURL2,
    method: "GET"
    // );
  })
    .then(function (response) {
      console.log(response);
      // declare vari topics inside the function (response)
      var topics = ["Ice Cream", "Sushi", "Pizza"];
      // push the click function value of what is typed in the text box into the topics array. 
      topics.push(searchTextBox);
      console.log("push what is typed into the search box into array w/ updated", topics);
      // put response.data inside results
      var results = response.data;
      console.log(response.data);
      // set var imageURL to the url of the strings' URL
      var imageURL = response.data["0"].images.original;
      console.log("gif url should appear", response.data["0"].images.original);
      // create a div with class
      var gifDiv = $("<div class='here'>")

      // set the entire gif-view div with <img> tags
      var gifItem = $("<img>");
      console.log("set the give div with <img> tags");
      // now that gifDiv is set to <img>, set the attributes of the variable to link the src url and alt name. 
      console.log('this is data 0 image', response.data["0"].images.original.url)
      gifItem.attr("src", response.data["0"].images.original.url);
      console.log("attach src to the div and put them in each src");
      gifItem.attr("alt", "food");
      console.log("give alt name food");
      gifDiv.append(gifItem);
      $("#gif-view").prepend(gifDiv);
      // $("#gif-view").prepend(gifItem);
      console.log("put the gifDiv inside the gif-view div");
    });
});

// create a button every time characters are typed into search box and click me is pressed. 
function renderButtons() {
  $("#button-view").empty();
  // create a loop for as many times as there are indeces in the topics variable
  for (var i = 0; i < topics.length; i++) {
    // create displayButton to create a div button for as many items inside topics.
    var displayButton = $("<button>");
    // Add class to the displayButton called food.
    displayButton.addClass("food");
    // attach attribute, "data-type", with the topics variable
    displayButton.attr("data-type", topics[i]);
    // put the items of topics[i] into text form in the displayButtonDiv
    displayButton.html(topics[i]);
    // append displayButton into the "#button-view", giving it a location to be placed in. 
    $("#button-view").append(displayButton);

    // this function inside the renderButtons registers a click event for the Ice Cream, Sushi, and Pizza buttons
    displayButton.on("click", function () {
      console.log($(this).text());
      // define each variable for Ice Cream, Sushi, Pizza
      // var iceCream = "Ice Cream";
      // var sushi = "Sushi";
      // var pizza = "Pizza";
      // // define the gif api to call on and make Ice Cream, sushi, pizza requests
      // var queryURLiceCream = "http://api.giphy.com/v1/gifs/search?q=" + iceCream + "&api_key=OYtCkDFHdaDGQuuEfAFwRF0wbj7eeWXD&limit=1";
      // var queryURLsushi = "http://api.giphy.com/v1/gifs/search?q=" + sushi + "&api_key=OYtCkDFHdaDGQuuEfAFwRF0wbj7eeWXD&limit=1";
      // var queryURLpizza = "http://api.giphy.com/v1/gifs/search?q=" + pizza + "&api_key=OYtCkDFHdaDGQuuEfAFwRF0wbj7eeWXD&limit=1";

      var topics = ["Ice Cream", "Sushi", "Pizza"];
      var queryURLOg = "http://api.giphy.com/v1/gifs/search?q=" + topics["0"] + "&api_key=OYtCkDFHdaDGQuuEfAFwRF0wbj7eeWXD&limit=1";
      console.log("hey i got clicked lol");
        $.ajax({
          url: queryURLOg,
          method: "GET"
        })
        .then (function (response) {
          console.log(response);
          var topics = ["Ice Cream", "Sushi", "Pizza"];
          var imageURLgif = response.data["0"].images.original.url;
          console.log(imageURLgif); 

          // create var to begin creation of img tag, src, and link url, then prepend to gif area.
          var iceCreamItem = $("<img>");
          iceCreamItem.attr("src", response.data["0"].images.original.url);
          iceCreamItem.attr("alt", "food");
          $("#gif-view").prepend(iceCreamItem);


 })

      // append the "Ice Cream", "Sushi", and "Pizza" button to the gif-view div to show up , refer to code above for that. 


        // })
      // }
    })
  }
};

// Create function where the "Click me" button is active on click This function is the event where one buton is clicked
$("#button").on("click", function (event) {
  // create event.preventDefault to prevent form from submitting itself also allow user to hit enter instead of clicking button.
  event.preventDefault();
  // create a variable that will grab whatever is typed into the search box
  var food = $("#searchbox").val().trim();
  // food that is typed in, is add to the current existing array
  topics.push(food);
  renderButtons();
});

renderButtons();







