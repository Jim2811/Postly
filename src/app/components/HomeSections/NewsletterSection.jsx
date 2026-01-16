"use client";
import React from "react";

export default function NewsletterSection() {
  return (
    <section className="py-16 bg-primary text-primary-content">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated!</h2>
        <p className="mb-6 text-base md:text-lg">
          Subscribe to receive the latest posts and creative stories from our writers.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="input text-black input-bordered w-full sm:w-auto flex-grow"
          />
          <button className="btn btn-neutral w-full sm:w-auto" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}