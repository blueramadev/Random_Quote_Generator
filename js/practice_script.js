var quotes = [
    {
        quote: "The true profession of man is finding his way to himself.",
        source: "Hermann Hesse",
        citation: "Music Choice - Soundscapes",
        year: 1
    },
    {
        quote: "The history of the world is full of men who rose to leadership, by sheer force of self-confidence, bravery and tenacity.",
        source: "Mahatma Gandhi",
        citation: "Music Choice - Soundscapes",
        year: 1920
    },
    {
        quote: "Write it down. You will lose thoughts, you thought, that you thought.",
        source: "Vanessa Workoff",
        citation: "quotesondesign.com",
        year: null
    },
    {
        quote: "But what is happiness except the simple harmony between a man and the life he leads?",
        source: "Albert Camus",
        citation: "",
        year: 1950
    },
    {
        quote: "Id like to offer you something to help you but in the Zen school we don't have a single thing.",
        source: "Ikkyu",
        citation: "Music Choice - Soundscapes",
        year: 0
    },
    {
        quote: "The possibilities are numerous once we decide to act and not react.",
        source: "George Bernard Shaw",
        citation: "thinkexist.com",
        year: 2
    },
    {
        quote: "To see takes time.",
        source: "Georgia O'Keeffe",
        year: 2
    }
];

var quotesCollection = [];
// var quotesQuote = [];

// I am here collecting the index values of the array of quote objects
for (i = 0; i < quotes.length; i += 1) {
  quotesCollection.push(i)
}

// Remember it can also be done this way, but I prefer to do it manually in a loop first
// creating a custom function to collect the index vales and could be recycled
// function getQuoteIndexes(quote, index) {
//   quotesCollection.push(index);
//   quotesQuote.push(quote);
// }
// quotes.forEach(getQuoteIndexes)

function print(quote) {
	var outputDIV = document.getElementById('quote-box');
	outputDIV.innerHTML = quote;
}

// get a random number based on the length of quotes
// select a random quote object based on the random number
// return the random quote object

var getRandomQuote = function getRandomQuote() {

  // if the quotesCollection is empty fill it back up, otherwise it runs out of quotes after (x number of quotes in array) clicks!
  if (quotesCollection.length < 1){
    for (i = 0; i < quotes.length; i += 1) {
      quotesCollection.push(i)
    }
  }

  // generate a random number based off number of quotes
  var randomNumber = Math.floor(Math.random() * quotesCollection.length);

  // get an index from the quotesCollection array
  var quoteIndex = quotesCollection[randomNumber];

  // remove the index from the quotesCollection array as its going to be used
  quotesCollection.splice(randomNumber, 1);

  // return quote object
  return quotes[quoteIndex];
}

var printQuote = function printQuote() {
  // get a random quote and store it as an object
  var randomHtmlQuote = getRandomQuote();
  // construct string
  if (randomHtmlQuote.source && randomHtmlQuote.citation && randomHtmlQuote.year) {
   builtQuote = '<p class="quote">' + randomHtmlQuote.quote + '</p><p class="source">' + randomHtmlQuote.source + '<span class="citation">' + randomHtmlQuote.citation + '</span><span class="year">' + randomHtmlQuote.year + '</span></p>';
  } else if (randomHtmlQuote.source && randomHtmlQuote.citation) {
   builtQuote = '<p class="quote">' + randomHtmlQuote.quote  + '</p> <p class="source">' + randomHtmlQuote.source  + '<span class="citation">' + randomHtmlQuote.citation  + '</span> </p>';
  } else if (randomHtmlQuote.source) {
   builtQuote = '<p class="quote">' + randomHtmlQuote.quote  + '</p> <p class="source">' + randomHtmlQuote.source + '</span> </p>';
  } else {
   builtQuote = '<p class="quote">' + randomHtmlQuote.quote  + '</p>';
  }
   document.getElementById('quote-box').innerHTML = builtQuote;
   // print(builtQuote)
}

// function that sets a random rgb color as the background color
var changeBackground = function changeBackground() {

    var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

    if (randomColor !== 'rgb(255,255,255)') {
        document.body.style.backgroundColor = randomColor;
    }
};

// event listener for loadquote button
document.getElementById('loadQuote').addEventListener("click",
    function() {
        printQuote(); // calling printQuote by itself
        changeBackground();
    }, false);

// automatically run the printQuote & changeBackground functions every 15 seconds
setInterval(function () {
    printQuote(getRandomQuote()); // getRandomQuote is evaluated first, then printQuote, in this case its meaningless becuase the function is not referencing the object internally
    changeBackground();
}, 15000);
