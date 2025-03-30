import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">YOURCLEAN DI YOULSA</span>
          </div>
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Bologna(Bo) Via GHIRADINI 32 CAP 4014</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <a href="mailto:youlsa05@gmail.com" className="hover:text-blue-400">youlsa05@gmail.com</a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <a href="tel:3511932552" className="hover:text-blue-400">3511932552</a>
            </div>
          </div>
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} YOURCLEAN. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
}