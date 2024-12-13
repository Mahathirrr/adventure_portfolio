import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Location",
    value: "Digital Nomad, Worldwide",
  },
  {
    icon: Mail,
    title: "Email",
    value: "explorer@example.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 234 567 890",
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {contactDetails.map(({ icon: Icon, title, value }) => (
        <div key={title} className="flex items-center gap-4">
          <Icon className="w-6 h-6 text-amber-600" />
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-stone-400">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
