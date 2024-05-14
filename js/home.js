
var quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Stay hungry, stay foolish. - Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "You miss 100% of the shots you don't take. - Wayne Gretzky"
];

var previousNumber;
var currentNumber;
var quote = document.getElementById("quote")
function generateQuote() {
    do {
        currentNumber = Math.floor(Math.random() * quotes.length);
    } while (currentNumber == previousNumber);

    previousNumber = currentNumber;
    var randomquote = quotes[currentNumber]
    quote.innerHTML = randomquote;
}
