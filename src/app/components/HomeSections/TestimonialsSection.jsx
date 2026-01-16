"use client";
import React from "react";

const testimonials = [
  {
    name: "Jhon Doe",
    image: "/Images/writer1.jpg",
    message: "NextPosts made sharing my dev stories fun and easy!"
  },
  {
    name: "Sadia Islam",
    image: "/Images/writer2.jpg",
    message: "The clean design and smooth experience keep me connected."
  },
  {
    name: "Tanvir Rahman",
    image: "/Images/writer3.jpg",
    message: "A great platform to express ideas and learn from others!"
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          What <span className="text-primary">Writers Say</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="card bg-base-100 shadow-md p-6">
              <div className="avatar mb-4 mx-auto">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={t.image} alt={t.name}/>
                </div>
              </div>
              <p className="text-gray-600 italic mb-3">
                “{t.message}”
              </p>
              <h3 className="font-semibold">{t.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}