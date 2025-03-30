import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function CareersForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    cv: null as File | null,
    coverLetter: null as File | null
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Convert files to base64 for sending via email
      const cvBase64 = formData.cv ? await fileToBase64(formData.cv) : '';
      const coverLetterBase64 = formData.coverLetter ? await fileToBase64(formData.coverLetter) : '';

      await emailjs.send(
        'service_ztv88ao', // Replace with your EmailJS service ID
        'template_zs97jlh', // Replace with your EmailJS template ID
        {
          to_email: 'horizonglobale@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          position: formData.position,
          cv_filename: formData.cv?.name,
          cv_content: cvBase64,
          cover_letter_filename: formData.coverLetter?.name,
          cover_letter_content: coverLetterBase64,
        },
        'C0qt7u5pFBNW-qWsw' // Replace with your EmailJS public key
      );

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        cv: null,
        coverLetter: null
      });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (e.target.type === 'file') {
      const fileInput = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [e.target.name]: fileInput.files?.[0] || null
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  return (
    <section id="careers" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Lavora Con Noi</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome e Cognome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700">Scegli un' opzione</label>
              <select
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="">Scegli l'opzione desiderata</option>
                <option value="agent">Addetto alle pulizie</option>
                <option value="supervisor">Supervisore</option>
                <option value="manager">Squadra Manager</option>
              </select>
            </div>
            <div>
              <label htmlFor="cv" className="block text-sm font-medium text-gray-700">CV</label>
              <input
                type="file"
                id="cv"
                name="cv"
                onChange={handleChange}
                accept=".pdf,.doc,.docx"
                className="mt-1 block w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">Lettra di Motivazzione</label>
              <input
                type="file"
                id="coverLetter"
                name="coverLetter"
                onChange={handleChange}
                accept=".pdf,.doc,.docx"
                className="mt-1 block w-full"
                required
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full px-6 py-3 rounded-lg font-semibold transition ${status === 'sending'
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
            >
              {status === 'sending' ? 'Candidatura in corso...' : 'Candidarsi'}
            </button>
            {status === 'success' && (
              <div className="text-green-600 text-center">La domanda è stata inoltrato con successo</div>
            )}
            {status === 'error' && (
              <div className="text-red-600 text-center">E avenuta un errore si prega di provarlo.</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}