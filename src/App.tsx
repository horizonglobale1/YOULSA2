import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import CareersForm from './components/CareersForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <Hero />
      <Services />
      <ContactForm />
      <CareersForm />
      <Footer />
    </div>
  );
}

export default App;