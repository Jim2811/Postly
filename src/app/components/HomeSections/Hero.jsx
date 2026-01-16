"use client";
import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero min-h-[70vh] bg-base-200">
      <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center gap-10 lg:gap-20 text-center lg:text-left">
        <div className="w-full sm:w-3/4 md:w-2/4 flex justify-center">
          <img
            src="/Images/heroBanner.png"
            className="w-64 sm:w-80 md:w-full max-w-sm rounded-lg shadow-2xl object-contain"
            alt="Hero banner"
          />
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-base-content">
            Share your voice with the world
          </h1>

          <p className="py-4 text-sm sm:text-base md:text-lg text-gray-600">
            Postly helps developers and creators publish ideas, tutorials,
            and stories that inspire others. Start reading or write your own post today!
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mt-4">
            <Link href="/posts" className="btn btn-primary w-full sm:w-auto">
              Read Posts
            </Link>
            <Link href="/login" className="btn btn-neutral w-full sm:w-auto">
              Start Writing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}