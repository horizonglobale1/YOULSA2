import React from 'react';
import { Home, Building2, Factory, Shield } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: "Pulizia Civile",
    description: "PUlizie condomini, Pulizie Uffici, Pulizie supermercati, Pulizie negozi, Pulizie eventi"
  },
  {
    icon: Building2,
    title: "TRATTAMENTO DEI PAVIMENTI",
    description: "Levigatura pavimenti, Lucidatura pavimenti, Trattamento pavimenti in resina"
  },
  {
    icon: Factory,
    title: "PULIZIA INDUSTRIALE",
    description: "Pulizie di Cantieri, Pulizie camera bianche, Pulizie farmaceutiche"
  },
  {
    icon: Shield,
    title: "SANIFICAZZIONE ",
    description: "Sanificazzioen ospedaliere, Sanificazzione Civile, Sanificazzione industriale"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12"> Offriamo dei servizi civile addatto alle vostre esigenza.
          <a href="#">

          </a>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}