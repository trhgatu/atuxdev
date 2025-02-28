"use client";

import { useEffect, useState } from "react";

const quotes = [
  { text: "Any sufficiently advanced technology is indistinguishable from magic.", author: "Arthur C. Clarke" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "It's not a bug. It's an undocumented feature!", author: "Unknown" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "The computer was born to solve problems that did not exist before.", author: "Bill Gates" },
];

const QuoteSection = () => {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <div className="text-center p-6 mt-10">
      <blockquote className="text-xl font-semibold italic">
        “{quote.text}”
      </blockquote>
      <p className="mt-2 text-gray-500">— {quote.author}</p>
    </div>
  );
};

export default QuoteSection;
