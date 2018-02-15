// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//This array of objects holds the data for the quotes
var quotes = [
	{
		quote: "I have self-doubt. I have insecurity. I have fear of failure. I have nights when I show up at the arena and I'm like, 'My back hurts, my feet hurt, my knees hurt. I don't have it. I just want to chill.' We all have self-doubt. You don't deny it, but you also don't capitulate to it. You embrace it.",
		source: "Kobe Bryant",
	},

	{
		quote: "For the past 33 years, I have looked in the mirror every morning and asked myself: 'If today were the last day of my life, would I want to do what I am about to do today?' And whenever the answer has been 'No' for too many days in a row, I know I need to change something.",
		source: "Steve Jobs",
	},

	{
		quote: "I can accept failure, everyone fails at something. But I can't accept not trying.",
		source: "Michael Jordan",
	},

	{
		quote: "The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education.",
		source: "Martin Luther King, Jr.",
	},

	{
		quote: "The most beautiful thing we can experience is the mysterious. It is the source of all true art and science.",
		source: "Albert Einstein",
	}

]

/*
-This function selects a random quote object from the the quotes array
-Returns the random quote object
*/	
function getRandomQuote() = {

}

/*
- This function calls the getRandomQuote function and stores the returned quote object in a variable
- This function constructs a string containing the different properties of the quote object	
 */
function printQuote() = {

} 



