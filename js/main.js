
// this is the quote API

var quoteApi = "http://api.forismatic.com/api/1.0/?format=jsonp&method=getQuote&jsonp=?&lang=en";

// this is the tweet API


// this is the button event handler

$("button").click(function() {
  getQuote()
});



// this is the ajax request when the button is clicked

// use $.getJSON function if information is already specified in the url
// it is shorthand for the longer, $.ajax()
// use $.ajax() if you need to manually list out preferences

function getQuote() {
  $.getJSON(quoteApi, function(response) {
    if (response.quoteAuthor === '') {
      response.quoteAuthor = 'unknown';
    }
    var tweet = 'https://twitter.com/intent/tweet?text=' + response.quoteText + ' - ' + response.quoteAuthor;

    $("#actualquote").html(response.quoteText);
    $("#author").html('- '+response.quoteAuthor);
    $("#tweetshow").show();
    $("#tweetit").attr("href", tweet);
  })
}
