/****************************************************
 A Random Quote Generator - A JS Techdegree project
 Unit 1
 By: Victor Akanam
*****************************************************/


// an array with a minimum of 5 objects
var quotes = [
  {
    quote: "I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy.",
    source: "Ray Kroc",
    citation: "Grinding It Out",
    year: 1992,
    tags: "Business"
  },
  {
    quote: "Get your facts first, then you can distort them as you please.",
    source: "Mark Twain",
    citation: "brainyquote.com",
    year: "Nov 1835 - April 1910",
    tags: "Funny"
  },

  {
    quote: "To love your neighbor as yourself, after all, is the great injunction of every religion.",
    source: "Marc Ian Barasch",
    citation: "The Compassionate Life",
    year: 2009,
    tags: "Inspirational"
  },
  {
    quote: "Constantly learn new things, develop your skills and learn new ones, more knowledge equals more motivation.",
    source: "Frank Mullani",
    citation: "Discover the Magic of Motivation Now",
    year: 2014,
    tags: "Motivational"
  },
  { 
    quote: "Our time is limited, so don’t waste it living someone else’s life..",
    source: "Steve Jobs",
    citation: "Stanford University",
    year: 2005,
    tags: "Motivational"
  },

  { 
    quote: "If you don't like how things are, change it! You're not a tree",
    source: "Jim Rohn",
    citation: "brainyquote.com",
    year: "Sept 1930 - Dec 2009",
    tags: "Motivational"
  }
];


//a function to generate a random number and then used to return a random quote from the array
 function getRandomQuote(){
  var randomNum =  Math.floor(Math.random() * quotes.length); 
  return quotes[randomNum];
 }

// a function to print the quote to the HTML page
function printQuote(){
  var print = getRandomQuote();
  var htmlQuotes = '';
  htmlQuotes += '<p class="quote">' + print.quote + '</p>';
  htmlQuotes += '<p class="source">' + print.source;
  if(print.citation){
  htmlQuotes += '<span class="citation">' + print.citation + '</span>';
  }
  if(print.year){
  htmlQuotes += '<span class="year">' + print.year + '</span>';
  }
  if(print.tags){
    htmlQuotes += '<span class="tags">' + print.tags + '</span>';
  }
  htmlQuotes += '</p>';

//Targeting the div with the id of 'quote-box', and set its innerHTML equal to htmlQuotes
  document.getElementById('quote-box').innerHTML = htmlQuotes;
}

function colorGen(){
  return color = Math.round(Math.random() * 255);
}

// using the setInterval() method to auto refresh quote as bg color changes
//code adapted from: https://www.youtube.com/watch?v=UzNyAB2Pg7g
setInterval(function(){
  printQuote();
  var red = colorGen();
  var green = colorGen();
  var blue = colorGen();
  var rgbColor = 'background-color: rgb(' + red + ',' + green + ',' + blue + ')'; 
  document.getElementById('backgroundColor').style = rgbColor;
}, 5000);

 //event listener for the print quote button
document.getElementById('load-quote').addEventListener("click", printQuote, false);
