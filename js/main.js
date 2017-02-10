
// this is the API

var quoteApi = "http://api.forismatic.com/api/1.0/?format=jsonp&method=getQuote&jsonp=?&lang=en";

// this is the button event handler

$("button").click(function() {
  getQuote()
});

// this is the ajax request when the button is clicked

// have to create an if statement stating that the author is "unknown"
// if there is no author in the object

// use $.getJSON function if information is already specified in the url
// it is shorthand for the longer, $.ajax()
// use $.ajax() if you need to manually list out preferences

function getQuote() {
  $.getJSON(quoteApi, function(response) {
    $("#actualquote").html(response.quoteText);
    $("#author").html(response.quoteAuthor);
  })
}



// need to add twitter API and integration
