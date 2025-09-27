import React from "react";

const data = [
  {
    id: 1,
    title: "მანქანებზე",
    content: " Ferrari LaFerrari – ჰიბრიდული სუპერქარი, იტალიური წარმოების, 963 ცხენის ძალით.",
  },
  {
    id: 2,
    title: "ცხოველებზე",
    content: " ლომი – აფრიკის მეფე, მამრებს გამოარჩევს ბეწვის ფაფარი.",
  },
  {
    id: 3,
    title: "ვიკიპედიის მსგავსი საიტი",
    content: " Britannica.com – ონლაინ ენციკლოპედია, უამრავი სტატიით.",
  },
  {
    id: 4,
    title: "ტექნიკაზე საიტი",
    content: " TechRadar.com – ტექნოლოგიების შესახებ ერთ-ერთი ცნობილი საიტი.",
  },
  {
    id: 5,
    title: "ჩემი არჩევანი",
    content: " PlayStation 5 – თანამედროვე სათამაშო კონსოლი მაღალი ხარისხის გრაფიკით.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-6">ინფორმაციული ბარათები</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-700">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
