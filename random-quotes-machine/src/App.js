import React, { useState } from "react";
import "./App.css";
// import React, { useState } from "react";

function App() {

  // Set up state for quote and author
  const [quote, setQuote] = useState("Random Quote");
  const [author, setAuthor] = useState("Author Name");

  // Array of Quotes
  const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Do not take life too seriously. You will never get out of it alive.", author: "Elbert Hubbard" },
    { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" }
  ];

   // Function to get a random quote
   const getNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex].text);
    setAuthor(quotes[randomIndex].author);
  };

  return (
    <div className="App">
      <div id="quote-box">
        <p id="text">"{quote}"</p>
        <p id="author">"{author}"</p>
        <button id="new-quote" onClick={getNewQuote} >New Quote</button>
        <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`} target="_blank" rel="noopener noreferrer">Tweet</a>
      </div>
    </div>
  );
}

export default App;
