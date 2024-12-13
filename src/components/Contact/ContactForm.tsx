import React from "react";
import { Send } from "lucide-react";
import { Input } from "../ui/Input";
import { TextArea } from "../ui/TextArea";
import { Button } from "../ui/Button";

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input placeholder="Your Name" required />
      <Input type="email" placeholder="Your Email" required />
      <TextArea rows={4} placeholder="Your Message" required />
      <Button type="submit" className="w-full py-3 rounded-lg" icon={Send}>
        Send Message
      </Button>
    </form>
  );
}
