import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import emailjs from '@emailjs/browser';
import App from './App';
import './index.css';

// Initialize EmailJS
emailjs.init('C0qt7u5pFBNW-qWsw');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);