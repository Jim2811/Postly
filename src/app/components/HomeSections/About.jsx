"use client";
import React from "react";

export default function AboutSection() {
  return (
    <section className="py-7 mx-auto max-w-7xl bg-base-100">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Postly</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
            Postly is a platform built for creative minds — a place where
            developers and writers connect through stories, share insights, and
            inspire each other. Whether you are posting tutorials, tips, or
            personal thoughts, your words matter here.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Powered by modern Next.js technology, it ensures speed, clean design,
            and a reader-friendly experience for everyone.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/Images/about.svg"
            alt="About illustration"
            className="w-64 sm:w-80 md:w-[400px] lg:w-[500px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}