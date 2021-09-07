// https://type.fit/api/quotes
// https://twitter.com/intent/tweet?text
let apiQuotes = [];
const quoteText = document.querySelector('#quote');
const authorText = document.querySelector('.author-text');
const twitter = document.querySelector('#twitter');
const newQuoteBtn = document.querySelector('#newQuote');

function newQuote() {
    const newQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    quoteText.textContent = newQuote.text;
    authorText.textContent = newQuote.author;
}

async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
        
    } catch (error) {
        // Show Errors here
        getQuotes()
    }
}

getQuotes();


newQuoteBtn.addEventListener('click', newQuote);
twitter.addEventListener('click', () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
});
