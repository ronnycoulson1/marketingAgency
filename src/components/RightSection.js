"use client";
import { useState, useEffect } from "react";

export default function RightSection() {
  const greetings = [
    { language: "English", text: "Hello", flag: "/flags/usa.png" },
    { language: "Spanish", text: "Hola", flag: "/flags/spain.png" },
    { language: "French", text: "Bonjour", flag: "/flags/france.png" },
    { language: "Italian", text: "Ciao", flag: "/flags/italy.png" },
  ];

  const [currentGreetings, setCurrentGreetings] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
        setIsFading(true); // start fade out effect
        setTimeout(()=>{
                setCurrentGreetings((prev) => (prev + 1 ) % greetings.length);
                setIsFading(false); //start fade-in effect
            },500); // waiit for the fade out to complete
        },3000); // change every 3 seconds

        return() => clearInterval(interval);
    },[]);
      


  return (
    <div className="flex flex-col justify-center items-center bg-center bg-no-repeat bg-cover text-center">
      <div
        className={`w-40 h-40 flex items-center justify-center bg-white rounded-full shadow-lg transition-opacity duration-500${        
        isFading ? "opacity-0": "opacity-100"
        }`}
        >
            <img
            src={greetings[currentGreetings].flag}
            alt={`${greetings[currentGreetings].language} flag`}
            className="w-24 h-16 object-contain"
        />
      </div>

        <h2
        className={`text-4xl font-bold mt-4 transition-opacity duration-500 ${
            isFading ? "opacity-0" : "opacity-100"
        }`}
        >

            {greetings[currentGreetings].text}
        </h2>

        <p className={`text-orange-500 text-xl mt-2 transition-opacity duration-500 ${
            isFading ? "opacity-0" : "opacity-100"
        }`} >
            {greetings[currentGreetings].language}
        </p>
    </div>
  );
}
