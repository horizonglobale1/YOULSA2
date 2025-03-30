import React from 'react';
import { Sparkles, Phone, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Sparkles className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-gray-800">YOURCLEAN</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="text-gray-600 hover:text-blue-600">Servizi</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600">About us</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600">Conttati</a>
          <a href="#careers" className="text-gray-600 hover:text-blue-600">Cariera</a>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:3511932552" className="flex items-center text-gray-600 hover:text-blue-600">
            <Phone className="h-5 w-5 mr-1" />
            <span>3511932552</span>
          </a>
          <a href="mailto:youlsa05@gmail.com" className="flex items-center text-gray-600 hover:text-blue-600">
            <Mail className="h-5 w-5 mr-1" />
            <span>youlsa05@gmail.com</span>
          </a>
        </div>
      </div>
    </header>
  );
}