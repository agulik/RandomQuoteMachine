
// this is the quote api
var CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
var QUOTE_API = 'http://api.forismatic.com/api/1.0/?format=json&method=getQuote&jsonp=?&lang=en';

// the api call function

function getQuote() {

  var url = `${CORS_PROXY}${QUOTE_API}`;
  return (
      fetch(url)
      .then(response => response.json())
      .then(data => data)
    );

}

// button event handler and data presentation

$("button").click(function() {
  getQuote()
  .then(function(response) {
    if (response.quoteAuthor === '') {
      response.quoteAuthor = 'unknown';
    }
    var tweet = 'https://twitter.com/intent/tweet?text=' + response.quoteText + ' - ' + response.quoteAuthor;
    $("#actualquote").html(response.quoteText);
    $("#author").html('- '+response.quoteAuthor);
    $("#tweetshow").show();
    $("#tweetit").attr("href", tweet);
  })
});
