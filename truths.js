
//Object Array to hold quotes, sources, citaitons and years
var quotes = [
    {
        quote: "The earth revolves around the sun."
         
        },
	{
	quote: "Water is tasteless, odourless and colourless."
	
	},
	{
	quote: "Sun gives us light."
	
	},
	{
	quote: "Human beings are mortals"
	
	},
	{
	quote: "Water is essential for survival"
	
	},
	{
	quote: "H2O is the chemical formula of water"
	
	},
	{
	quote: "One plus one equals to two"
	
	},
	{
	quote: "We breath in Oxygen."
	
	},
	{
	quote:  "Earth has gravitational force"
	
	},
	{
	quote: "The alternate rise and fall in ocean waves occurs twice in 24 hours."
	
	},
	{
	quote: "Earth is spherical in shape"

	},
	{
	quote: "Strange but true – there are 12 times more trees on Earth than stars in the Milky Way!",
	source: "Scientists estimate there are between 200 – 400 billion stars in our galaxy while there are an estimated 1 trillion trees on Earth! Like the stars, trees live a long time and are truly important for life. Check out a related blog you might like"
	
	},
	{
	quote: "There was a time when 4 distinct human species lived at the same time",
	source: "After carefully studying hominin fossils found in Kenya, Ethiopia and Chad, German scientists have concluded that 4 distinct human species coexisted at the same time about 3 million years ago.  What isn’t known is how or if they are related and whether they interacted with one another."

	},
	{
	quote: "It’s unlikely that anyone could die in quicksand.",
	source: "You know all those movies and TV shows where someone very dramatically gets swallowed up by quicksand.  It’s just that…dramatic, but not true.  This is because most quicksand is only a few inches deep.  If someone does die in quicksand it usually occurs in tidal basins.  The person gets stuck, then drowns when the tide comes in."
    
	},
	{
	quote: "Pineapples take two years to grow",
	source: "Remember this the next time you buy a lovely pineapple and then let it go to waste.  If planted from a sucker, a pineapple will take about 18 months to bloom, but if you plant the top of the pineapple, it will take 2 to 2 ½ years to produce a bloom."
	},
	{
	quote: "If you want to go fast, go alone. If you want to go far, go together.",
	source: "African proverb"
	},
	{
	quote: "To overcome pain and learn from it, you have to go through it. ",
	source: "You’ve heard the saying,What doesn’t kill you makes you stronger But maybe you’ve been through something that makes you think,Not always "
	},
	{
	quote: "Struggles can lead you closer to success. ",
	source: "Everyone is struggling with something. Even those who seem to have everything “together” have struggles you don’t know about. "
	},
	{
	quote: "This, too, shall pass.",
	source: "Whatever you’re going through right now — or whatever you might be enjoying — it’s a universal truth that nothing lasts forever. "
	},
	{
	quote: "Some things you can change; others you must learn to accept",
	source: "Some things you can change. Some things you can’t. When you’re frustrated about the latter, it only darkens your outlook on life and makes it impossible to enjoy the good in it. Learn to accept the things you can’t change, so you can learn from them. Only then can you bring something good out of each. "
	},
	{
	quote: "Life is an adventure",
	source: "Life is one choice after another, and some of those choices lead to adventures you wouldn’t have had otherwise. But life as a whole is an adventure. And yours will look different from anyone else’s. "
	},
	{

	quote: "Everything you want to achieve begins with a single thought",
	source: "While it’s also universally true that thoughts aren’t enough, everything you want to do in your life begins with a thought"
	},
	{
	quote: "There is no “perfect time” to do anything. Don’t wait for it",
	source: "If you’re waiting for the perfect time to do something that will change your life for the better, you’ll never get started. Because while some conditions may be more favorable to what you want to do, there will never be ideal conditions."
	}
];

//Function to randomly select a quote value and return a random quote object from the quotes array
function getRandomQuote () {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	var randomQuote = quotes[randomNumber];
	return randomQuote;
}	

//Function to select random rgb color value
function getRandomColor () {
	var red = Math.floor(Math.random() * 256 );
	var green = Math.floor(Math.random() * 256 );
	var blue = Math.floor(Math.random() * 256 );
	 var randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}

//Function to call the getRandomQuote function and stores the returned quote object in a variable
//Constructs a string containing the different properties of the quote object 
function printQuote () {
		var quotes = getRandomQuote ();
		var quoteContainer = document.getElementById("quote-box");
		var quoteString = `<p class="quote">${quotes.quote}</p><p class="source">${quotes.source}`;
				if (quotes.citation) {quoteString += `<span class="citation">${quotes.citation}</span>`}
				if (quotes.year) {quoteString += `<span class="year">${quotes.year}</span></p>`}
				else {quoteString += '</p>'};
					quoteContainer.innerHTML = quoteString;

					//assigns random color value to document background color 
					document.body.style.backgroundColor = getRandomColor ();
}

//Quote automatically refreshes every 15 seconds
// window.setInterval(function(){
// printQuote ();
// }, 150000);

//Event listener on LoadQuote button to generate new quote		
document.getElementById("loadQuote").addEventListener("click", printQuote, true);






	