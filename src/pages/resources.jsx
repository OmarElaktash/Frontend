import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';   

const BlogCard = ({ title, excerpt, image, date, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-102 border border-gray-100"
    >
      <div className="relative overflow-hidden h-56">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <div className="p-8">
        <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-[#A3C1E5]/20 to-[#A9D4A7]/20 text-sm text-gray-600 mb-4">
          {date}
        </div>
        <h3 className="text-2xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#A3C1E5] to-[#A9D4A7]">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          {excerpt}
        </p>
        <Link href={link} className="group flex items-center text-[#A3C1E5] hover:text-[#A9D4A7] transition-colors duration-300">
          <span className="font-medium">Read More</span>
          <svg 
            className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

const Resources = () => {
  const blogs = [
    {
      title: "Building Daily Mental Wellness Habits",
      excerpt: "Discover practical tips for incorporating mental health practices into your daily routine, from mindful meditation to gratitude journaling. Learn how small changes can lead to significant improvements in your mental well-being.",
      image: "/mentla.png",
      link: "/resources/Mental-Wellness-Habits",
      date: "March 15, 2024"
    },
    {
      title: "Understanding and Managing Anxiety",
      excerpt: "Learn effective strategies to recognize anxiety triggers and develop healthy coping mechanisms for better emotional well-being. Explore evidence-based techniques for finding calm in challenging moments.",
      image: "/power.png",
      link: "/resources/Understanding-Anxiety",
      date: "March 10, 2024"
    },
    {
      title: "The Power of Self-Compassion",
      excerpt: "Explore how practicing self-compassion can transform your mental health journey and lead to greater emotional resilience. Discover gentle approaches to self-care and personal growth.",
      image: "/compassion.png",
      link: "/resources/Power-Of-Self-Compassion",
      date: "March 5, 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#A3C1E5] to-[#A9D4A7]"
          >
            Wellness Resources
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Explore our collection of articles designed to support your mental health journey
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
