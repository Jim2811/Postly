"use client";
import React from "react";

const categories = [
  { name: "Web Development", icon: "💻" },
  { name: "UI / UX Design", icon: "🎨" },
  { name: "Life & Productivity", icon: "🌿" },
  { name: "Technology News", icon: "📰" },
  { name: "Inspiration", icon: "✨" },
  { name: "Tutorials", icon: "📘" },
];

export default function CategoriesSection() {
  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Explore <span className="text-primary">Categories</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="card bg-base-100 shadow-md p-4 hover:shadow-xl transition-all cursor-pointer"
            >
              <p className="text-4xl">{cat.icon}</p>
              <h3 className="text-base font-semibold mt-2">{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}