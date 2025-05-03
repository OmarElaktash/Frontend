import React from 'react';
import { motion } from 'framer-motion';

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

const UnderstandingAnxiety = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <div className="absolute -top-8 left-0 w-20 h-20 bg-[#A3C1E5]/10 rounded-full blur-2xl"></div>
          <div className="absolute top-20 right-20 w-20 h-20 bg-[#A9D4A7]/10 rounded-full blur-2xl"></div>

          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-semibold text-black/60 leading-tight mb-6"
          >
            Understanding
            <span className="block font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#A3C1E5] to-[#A9D4A7]">
              Anxiety
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            custom={0.2}
            className="text-xl text-gray-600 leading-relaxed mb-12"
          >
            A comprehensive guide to understanding anxiety, recognizing its symptoms, 
            and developing effective strategies for managing your mental well-being.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            custom={0.3}
            className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 mb-12"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is Anxiety?</h2>
            <p className="text-gray-600 leading-relaxed">
              Anxiety is a natural human response to stress and uncertainty. It's our body's built-in alarm system 
              that helps us stay alert and respond to potential threats. However, when anxiety becomes excessive 
              or persistent, it can interfere with daily life and well-being.
            </p>
          </motion.div>

          <motion.section 
            variants={fadeInUp}
            custom={0.4}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">Common Symptoms</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Persistent worrying or racing thoughts",
                "Difficulty concentrating",
                "Restlessness or feeling 'on-edge'",
                "Physical symptoms (rapid heartbeat, sweating)",
                "Sleep disturbances",
                "Fatigue and irritability"
              ].map((symptom, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  custom={0.1 * idx}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                >
                  <p className="text-gray-700">{symptom}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            variants={fadeInUp}
            custom={0.5}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">Management Strategies</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Practice Mindfulness",
                  content: "Mindfulness helps bring your attention to the present moment, reducing worry about the future. Try simple breathing exercises or meditation for 5-10 minutes daily."
                },
                {
                  title: "Maintain a Healthy Lifestyle",
                  content: "Regular exercise, balanced nutrition, and adequate sleep can significantly impact your mental well-being. Physical health directly influences emotional resilience."
                },
                {
                  title: "Challenge Negative Thoughts",
                  content: "Learn to identify and question anxious thoughts. Ask yourself: Is this thought realistic? What evidence supports or contradicts it?"
                },
                {
                  title: "Establish Routines",
                  content: "Creating predictable patterns in your daily life can help reduce uncertainty and provide a sense of control. Start with small, manageable routines."
                }
              ].map((strategy, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  custom={0.1 * idx}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{strategy.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{strategy.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
          <motion.section
            variants={fadeInUp}
            custom={0.6}
            className="mb-12 bg-gradient-to-r from-[#A3C1E5]/10 to-[#A9D4A7]/10 p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">Quick Relief Techniques</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                variants={fadeInUp}
                custom={0.7}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4 text-[#A3C1E5]">5-4-3-2-1 Grounding</h3>
                <div className="space-y-3">
                  <p className="text-gray-700">See 5 things</p>
                  <p className="text-gray-700">Touch 4 things</p>
                  <p className="text-gray-700">Hear 3 things</p>
                  <p className="text-gray-700">Smell 2 things</p>
                  <p className="text-gray-700">Taste 1 thing</p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                custom={0.8}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4 text-[#A9D4A7]">Box Breathing</h3>
                <div className="w-40 h-40 mx-auto border-4 border-[#A9D4A7]/30 rounded-lg p-4">
                  <div className="text-gray-700 space-y-3 text-center">
                    <p>Inhale 4s</p>
                    <p>Hold 4s</p>
                    <p>Exhale 4s</p>
                    <p>Hold 4s</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>
          <motion.div
            variants={fadeInUp}
            custom={0.9}
            className="bg-gradient-to-r from-[#A9D4A7]/10 to-[#A3C1E5]/10 p-8 rounded-2xl mb-8"
          >
            <p className="italic text-gray-700 text-center text-lg">
              "Remember: Anxiety is common and manageable. With the right tools and support, 
              you can develop effective strategies to cope with anxiety and lead a fulfilling life."
            </p>
          </motion.div>

          <motion.footer
            variants={fadeInUp}
            custom={1.0}
            className="text-center text-gray-500 text-sm italic"
          >
            Disclaimer: This information is for educational purposes only and should not substitute professional medical advice.
          </motion.footer>
        </motion.div>
      </div>
    </div>
  );
};

export default UnderstandingAnxiety;
