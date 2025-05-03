import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiHeart, FiActivity, FiShield, FiSmartphone, FiUsers } from 'react-icons/fi';

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

const MentalWellnessHabits = () => {
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
            Building Daily
            <span className="block font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#A3C1E5] to-[#A9D4A7]">
              Mental Wellness Habits
            </span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            custom={0.2}
            className="text-xl text-gray-600 leading-relaxed mb-12"
          >
            In today's fast-paced world, maintaining good mental health is just as important as physical wellness. 
            Establishing daily mental wellness habits can help create a foundation for better emotional resilience 
            and overall well-being.
          </motion.p>

          <div className="grid gap-8">
            {[
              {
                icon: FiSun,
                title: "1. Start Your Day Mindfully",
                content: "Begin each morning with a few minutes of mindful breathing or meditation. This simple practice can set a positive tone for your day and help you maintain mental clarity. Try sitting quietly for 5-10 minutes, focusing on your breath and letting thoughts pass without judgment."
              },
              {
                icon: FiHeart,
                title: "2. Practice Gratitude",
                content: "Take time each day to acknowledge three things you're grateful for. This could be as simple as a warm cup of coffee or a friendly conversation. Gratitude practice has been shown to increase happiness and reduce stress levels."
              },
              {
                icon: FiActivity,
                title: "3. Move Your Body",
                content: "Physical activity isn't just good for your body—it's essential for mental health. Aim for at least 30 minutes of movement daily, whether it's a walk, yoga, or dancing. Exercise releases endorphins, nature's mood boosters."
              },
              {
                icon: FiShield,
                title: "4. Set Healthy Boundaries",
                content:  `Learn to say "no" when necessary and establish clear boundaries in both personal and professional relationships. This helps prevent burnout and maintains emotional energy for what truly matters to you.`
              },
              {
                icon: FiSmartphone,
                title: "5. Digital Detox Periods",
                content: "Designate specific times each day to disconnect from digital devices. This could be during meals, before bedtime, or first thing in the morning. This practice helps reduce anxiety and improves present-moment awareness."
              },
              {
                icon: FiUsers,
                title: "6. Nurture Social Connections",
                content: "Make time for meaningful social interactions. Whether it's a quick coffee with a friend or a phone call with family, social connections are vital for mental well-being. Quality relationships provide support, understanding, and a sense of belonging."
              }
            ].map((section, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                custom={0.2 * (idx + 1)}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#A3C1E5]/20 to-[#A9D4A7]/20 rounded-full flex items-center justify-center">
                    <section.icon className="text-2xl text-[#A3C1E5]" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800">{section.title}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}

            <motion.div
              variants={fadeInUp}
              custom={1.6}
              className="bg-gradient-to-r from-[#A3C1E5]/10 to-[#A9D4A7]/10 p-8 rounded-2xl mt-8"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Quick Tips for Implementation
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Start small - choose one habit to focus on at a time",
                  "Track your progress in a journal or app",
                  "Be patient and compassionate with yourself",
                  "Celebrate small wins along the way",
                  "Adjust habits as needed to fit your lifestyle"
                ].map((tip, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-[#A3C1E5] rounded-full"></div>
                    {tip}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              custom={1.8}
              className="bg-gradient-to-r from-[#A9D4A7]/10 to-[#A3C1E5]/10 p-8 rounded-2xl mt-4"
            >
              <p className="italic text-gray-700 text-center text-lg">
                "Remember, mental wellness is a journey, not a destination. Small, 
                consistent actions each day can lead to significant improvements in 
                your mental health and overall quality of life."
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MentalWellnessHabits;
