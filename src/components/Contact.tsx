import React from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className="bg-stone-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-stone-800 rounded-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
          <h2 className="text-4xl font-bold text-center mb-12">Send a Message in a Bottle</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-amber-600" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-stone-400">Digital Nomad, Worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-amber-600" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-stone-400">explorer@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-amber-600" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-stone-400">+1 234 567 890</p>
                  </div>
                </div>
              </div>
            </div>
            
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-stone-900 rounded-lg focus:ring-2 focus:ring-amber-600 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-stone-900 rounded-lg focus:ring-2 focus:ring-amber-600 outline-none"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-2 bg-stone-900 rounded-lg focus:ring-2 focus:ring-amber-600 outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 bg-amber-600 hover:bg-amber-700 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}