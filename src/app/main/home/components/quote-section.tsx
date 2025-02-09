"use client";

import { useEffect, useState } from "react";

const quotes = [
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
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
