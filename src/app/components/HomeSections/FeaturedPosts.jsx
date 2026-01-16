"use client";
import React from "react";

const posts = [
  {
    id: 1,
    title: "Understanding Next.js App Router",
    author: "Ariana Malik",
    image: "/Images/post1.jpg",
    excerpt: "Learn how routing works in the modern Next.js framework.",
  },
  {
    id: 2,
    title: "10 Tailwind Tips You Should Know",
    author: "Rafiul Hasan",
    image: "/Images/post2.jpg",
    excerpt: "A few practical Tailwind utilities that simplify your workflow.",
  },
  {
    id: 3,
    title: "Deploying Apps to Vercel",
    author: "Amira Chowdhury",
    image: "/Images/post3.jpg",
    excerpt: "Fast, easy, and free deployments using Vercel.",
  },
];

export default function FeaturedPosts() {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Featured <span className="text-primary">Posts</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <div key={post.id} className="card bg-base-200 shadow-md hover:shadow-xl transition-shadow">
              <figure>
                <img src={post.image} alt={post.title} className="h-56 w-full object-cover"/>
              </figure>
              <div className="card-body">
                <h3 className="card-title text-xl">{post.title}</h3>
                <p className="text-gray-600 text-sm">{post.excerpt}</p>
                <p className="mt-2 text-sm font-semibold text-primary">By {post.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}