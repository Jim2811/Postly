"use client";
import React from "react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to <span className="text-primary">Share Your Story?</span>
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Join our growing community of developers and writers today.
        </p>
        <Link href="/login" className="btn btn-primary text-lg px-8">
          Get Started
        </Link>
      </div>
    </section>
  );
}