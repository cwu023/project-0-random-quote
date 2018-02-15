// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//This array of objects holds the data for the quotes
var quotes = [
	{
		quote: "We all have self-doubt. You don't deny it, but you also don't capitulate to it. You embrace it.",
		source: "Kobe Bryant",
		citation: "",
		year: ""
	},

	{
		quote: "Innovation distinguishes between a leader and a follower.",
		source: "Steve Jobs",
		citation: "",
		year: ""
	},

	{
		quote: "I can accept failure, everyone fails at something. But I can't accept not trying.",
		source: "Michael Jordan",
		citation: "",
		year: ""
	},

	{
		quote: "The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education.",
		source: "Martin Luther King, Jr.",
		citation: "",
		year: ""
	},

	{
		quote: "The most beautiful thing we can experience is the mysterious. It is the source of all true art and science.",
		source: "Albert Einstein",
		citation: "",
		year: ""
	}

]


//This function selects a random quote object from the the quotes array
//Returns the random quote object	
function getRandomQuote() {
	var randomQuotes = Math.floor(Math.random() * quotes.length);
	return quotes[randomQuotes];
}


//This function calls the getRandomQuote function and stores the returned quote object in a variable
//This function constructs a string containing the different properties of the quote object	
function printQuote() {
	var returnedQuotes = getRandomQuote();
	var myQuotes = '<p class="quote">' + returnedQuotes.quote + '</p>';
	myQuotes += '<p class="source">' + returnedQuotes.source;
	//if citation or year is missing, only add </p> to the quotes
	if (returnedQuotes.citation === "" || returnedQuotes.year === "") {
		myQuotes += '</p>';
	} 

	//if citation or year is not missing, add to quotes with the </p>
	else {
		myQuotes += '<span class="citation">' + returnedQuotes.citation + '</span>' + '</p>';
		myQuotes += '<span class="year">' + returnedQuotes.year + '</span>' + '</p>';
	}
	document.getElementById('quote-box').innerHTML = myQuotes;
} 

