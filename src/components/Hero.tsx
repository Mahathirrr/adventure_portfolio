import React from 'react';
import { Compass } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519681393784-d120267933ba')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-900/90" />
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl px-4">
        <Compass className="w-16 h-16 mx-auto mb-8 animate-spin-slow" />
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wider">
          EXPLORE MY JOURNEY
        </h1>
        <p className="text-xl md:text-2xl text-stone-200 mb-8">
          Full-Stack Developer • Digital Explorer • Code Adventurer
        </p>
        <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 rounded-full 
          transition-all duration-300 text-lg font-semibold tracking-wide">
          Begin Adventure
        </button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-2 h-3 bg-white rounded-full mt-2 animate-scroll" />
        </div>
      </div>
    </div>
  );
}