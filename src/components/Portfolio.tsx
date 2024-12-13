import React, { useState } from "react";
import { Code, Globe, Palette } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Mountain Explorer App",
    category: "web",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    description: "Interactive mountain hiking platform",
  },
  {
    id: 2,
    title: "Adventure Journal",
    category: "design",
    image: "https://images.unsplash.com/photo-1527168027773-0cc890c4f42e",
    description: "Digital travel diary application",
  },
  {
    id: 3,
    title: "Trail Finder API",
    category: "code",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b",
    description: "RESTful API for hiking trails",
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter((project) =>
    filter === "all" ? true : project.category === filter,
  );

  return (
    <section className="bg-stone-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Expedition Log</h2>

        <div className="flex justify-center gap-4 mb-12">
          {[
            { id: "all", icon: Globe, label: "All" },
            { id: "web", icon: Globe, label: "Web" },
            { id: "code", icon: Code, label: "Code" },
            { id: "design", icon: Palette, label: "Design" },
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setFilter(id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === id
                  ? "bg-amber-600 text-white"
                  : "bg-stone-800 text-stone-400 hover:bg-stone-700"
              }`} // Perbaikan disini
            >
              <div className="flex items-center gap-2">
                <Icon size={16} />
                <span>{label}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-stone-300">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

