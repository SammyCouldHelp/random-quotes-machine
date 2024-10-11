import React, { useState } from "react";
import "./App.css";

function App() {

  // Set up state for quote and author
  const [quote, setQuote] = useState("Random Quote");
  const [author, setAuthor] = useState("Author Name");
  const [bgColor, setBgColor] = useState("#d1cfa1");


  // Array of Quotes and colors
  const quotes = [
    { text: "We have a shared destiny, a shared responsibility to save the world from those who attempt to destroy it.", author: "Winnie Madikizela-Mandela" },
    { text: "If you laugh with somebody, then you know you share something.", author: "Trevor Noah" },
    { text: "Together we have travelled a long road to be where we are today. This has been a road of struggle against colonial and apartheid oppression.", author: "Thabo Mbeki" },
    { text: "The fight for freedom must go on until it is won; until our country is free and happy and peaceful as part of the community of man, we cannot rest.", author: "Oliver Tambo" },
    { text: "The more I practice the luckier I get.", author: "Gary Player" },
    { text: "You can never have unity if you want things to go your way.", author: "Cyril Ramaphosa" },
    { text: "Whatever you go into, you have to go in there to be the best. There's no formulas. It's all about passion and honesty and hard work. It might look glamorous, but it takes a lot of hard work. The blessing with the arts is that you can do it forever.", author: "Hugh Masekela" },
    { text: "You can't always play the hero. You have to play the villain.", author: "John Kani" },
    { text: "The more I accomplish, the more pressure I put on myself.", author: "Oscar Pistorius" },
    { text: "The little opportunity given to a monkey to wear cloths does not guarantee it to join the dinning table.", author: "Anonymous" },
    { text: "Before You go out with a widow, you must first ask her what killed the husband.", author: "Anonymous" },
    { text: "The little opportunity given to a monkey to wear cloths does not guarantee it to join the dinning table.", author: "Anonymous" },
    { text: "A child can play with its mother's breasts, but not its father's testicles.", author: "Anonymous" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Do not take life too seriously. You will never get out of it alive.", author: "Elbert Hubbard" },
    { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" }
  ];

  const colors = ["#d1cfa1", "#a2c0c4", "#d7b5a3", "#b2a7d5", "#d5a2b3", "#283d3b", "#197278", "#EDDDD4",
    "#C44536", "#FCFF4B", "#044389", "#5995ED", "#1F2232",
    "#BDE4A7", "#FFFD98", "#B0B5B3", "#EF27A6"
  ];


   // Function to get a random quote and random background color
   const getNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setQuote(quotes[randomIndex].text);
    setAuthor(quotes[randomIndex].author);
    setBgColor(randomColor); // Change background color
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <div id="quote-box">
        <p id="text" style={{ color: bgColor }}>"{quote}"</p>
        <p id="author" style={{ color: bgColor }}>"{author}"</p>
        <div id="share">
        <button id="new-quote" onClick={getNewQuote} style={{ backgroundColor: bgColor, color: 'white' }} >New Quote</button>
        
        <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: bgColor, color: 'white' }} > 
        <img src="/twitter-alt.png" alt="Tweet this quote" style={{ width: '24px', height: '24px' }} />

        </a>

        </div>
        
      </div>
      <footer>
        by <a href="https://github.com/YOUR-GITHUB-USERNAME">Samuel Dibiah</a>
      </footer>
    </div>
  );
}

export default App;
