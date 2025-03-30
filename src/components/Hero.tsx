import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[600px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          filter: 'brightness(0.7)'
        }}
      />
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Pulizia impeccabile, soddisfazione garantita
            </h1>
            <p className="text-lg md:text-xl text-white mb-6 md:mb-8">
              Qualità, precisione e attenzione ai dettagli sono le nostre priorità.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-center"
              >
                Chiedi un preventivo
              </a>
              <a
                href="#services"
                className="bg-white text-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-center"
              >
                Notre servizi
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}