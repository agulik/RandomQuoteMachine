
// this is the quote api

var quoteApi = "http://api.forismatic.com/api/1.0/?format=jsonp&method=getQuote&jsonp=?&lang=en";

// this is the button event handler

$("button").click(function() {
  getQuote()
});

// this is the ajax request function when the button is clicked
// use $.getJSON function if information is already specified in the api url
// use $.ajax() if you need to manually list out data retrieval preferences

function getQuote() {
  $.getJSON(quoteApi, function(response) {
    // if the quote doesn't have an author, show 'uknown'
    if (response.quoteAuthor === '') {
      response.quoteAuthor = 'unknown';
    }
    // create local variable for twitter api + link data to tweet
    var tweet = 'https://twitter.com/intent/tweet?text=' + response.quoteText + ' - ' + response.quoteAuthor;

    // return the quote, author, tweet button and tweet functionality
    $("#actualquote").html(response.quoteText);
    $("#author").html('- '+response.quoteAuthor);
    $("#tweetshow").show();
    $("#tweetit").attr("href", tweet);
  })
}
