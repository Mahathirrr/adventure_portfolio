import React from "react";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section className="bg-stone-900 text-white py-20" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-stone-800 rounded-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
          <h2 className="text-4xl font-bold text-center mb-12">
            Send a Message in a Bottle
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
