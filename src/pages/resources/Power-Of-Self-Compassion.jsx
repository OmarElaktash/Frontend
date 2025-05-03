import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiSmile, FiSun, FiRefreshCw, FiFeather, FiStar } from 'react-icons/fi';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay,
      ease: [0.04, 0.62, 0.23, 0.98]
    }
  })
};

const PowerOfSelfCompassion = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <div className="absolute -top-8 left-0 w-20 h-20 bg-[#E5A3C1]/10 rounded-full blur-2xl"></div>
          <div className="absolute top-20 right-20 w-20 h-20 bg-[#D4A7A9]/10 rounded-full blur-2xl"></div>

          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-semibold text-black/60 leading-tight mb-6"
          >
            Embracing The
            <span className="block font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#E5A3C1] to-[#D4A7A9]">
              Power of Self-Compassion
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            custom={0.2}
            className="text-xl text-gray-600 leading-relaxed mb-12"
          >
            In a world that often emphasizes perfectionism and self-criticism, learning to be kind to yourself 
            can be transformative. Self-compassion isn't just about feeling good—it's about fostering resilience, 
            emotional well-being, and a healthier relationship with yourself.
          </motion.p>

          <div className="grid gap-8">
            {[
              {
                icon: FiHeart,
                title: "1. Understanding Self-Compassion",
                content: "Self-compassion means treating yourself with the same kindness and understanding that you'd offer a good friend. It involves acknowledging your struggles without judgment and recognizing that imperfection is part of the shared human experience."
              },
              {
                icon: FiSmile,
                title: "2. The Three Elements",
                content: "Self-compassion comprises three key components: self-kindness instead of self-judgment, common humanity versus isolation, and mindfulness rather than over-identification with emotions. Each element helps build a more nurturing relationship with yourself."
              },
              {
                icon: FiSun,
                title: "3. Benefits of Self-Compassion",
                content: "Research shows that self-compassion reduces anxiety and depression while increasing emotional resilience, motivation, and life satisfaction. It helps you bounce back from setbacks and maintains mental well-being during challenging times."
              },
              {
                icon: FiRefreshCw,
                title: "4. Breaking Self-Critical Patterns",
                content: "Notice when you're being harsh with yourself and pause. Replace critical self-talk with understanding and encouragement. Remember that making mistakes and facing difficulties are natural parts of being human."
              },
              {
                icon: FiFeather,
                title: "5. Daily Self-Compassion Practices",
                content: "Start with small acts of self-kindness: take mindful breaks, write self-compassionate letters, or practice soothing touch like placing a hand on your heart during moments of stress. These simple gestures can create powerful shifts in your relationship with yourself."
              },
              {
                icon: FiStar,
                title: "6. Cultivating Inner Strength",
                content: "Self-compassion isn't weakness—it's a source of inner strength. When you accept yourself fully, you build emotional resilience and create a secure base from which to grow, take risks, and pursue your goals with confidence."
              }
            ].map((section, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                custom={0.2 * (idx + 1)}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#E5A3C1]/20 to-[#D4A7A9]/20 rounded-full flex items-center justify-center">
                    <section.icon className="text-2xl text-[#E5A3C1]" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800">{section.title}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}

            <motion.div
              variants={fadeInUp}
              custom={1.6}
              className="bg-gradient-to-r from-[#E5A3C1]/10 to-[#D4A7A9]/10 p-8 rounded-2xl mt-8"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Self-Compassion Exercises
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Practice the self-compassion break: mindfulness, common humanity, kindness",
                  "Write a letter to yourself from a compassionate perspective",
                  "Use gentle touch or self-soothing gestures",
                  "Develop compassionate self-talk phrases",
                  "Create a daily self-compassion ritual"
                ].map((tip, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-[#E5A3C1] rounded-full"></div>
                    {tip}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              custom={1.8}
              className="bg-gradient-to-r from-[#D4A7A9]/10 to-[#E5A3C1]/10 p-8 rounded-2xl mt-4"
            >
              <p className="italic text-gray-700 text-center text-lg">
                "Being compassionate to yourself isn't a luxury—it's a necessity. 
                It's about acknowledging your humanity and treating yourself with 
                the same care and understanding you'd offer to someone you love."
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PowerOfSelfCompassion;
