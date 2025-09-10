"use client";

import { useEffect, useState } from "react";

const clients = [
  { name: "Nike", logo: "N", industry: "Sports & Apparel" },
  { name: "Apple", logo: "A", industry: "Technology" },
  { name: "Tesla", logo: "T", industry: "Automotive" },
  { name: "Netflix", logo: "N", industry: "Entertainment" },
  { name: "Google", logo: "G", industry: "Technology" },
  { name: "Microsoft", logo: "M", industry: "Software" },
  { name: "Amazon", logo: "A", industry: "E-commerce" },
  { name: "Meta", logo: "M", industry: "Social Media" },
  { name: "Spotify", logo: "S", industry: "Music Streaming" },
  { name: "Adobe", logo: "A", industry: "Creative Software" },
];

export default function ClientCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium text-white border border-white/30 bg-white/10 mb-6">
            Trusted by Industry Leaders
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Premium Clients</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Join the ranks of Fortune 500 companies and industry leaders who trust High Roller Agency for their digital marketing needs.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {clients.concat(clients).map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-none w-1/3 px-4"
              >
                <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 text-center hover:border-white/30 transition-all hover:scale-105">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{client.logo}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{client.name}</h3>
                  <p className="text-gray-400 text-sm">{client.industry}</p>
                  <div className="mt-4 flex justify-center">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-1 h-1 rounded-full bg-white" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {clients.slice(0, clients.length - 2).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}