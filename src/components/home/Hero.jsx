import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { supabase } from '../../utils/supabaseClient';
import { FiLock, FiUser, FiHeart, FiBarChart2, FiCalendar, FiSmile } from 'react-icons/fi';

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

export const Hero = () => {
  const router = useRouter();

  async function handleStartChat() {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      router.push('/chat');
    } else {
      router.push('/login');
    }
  }

  return (
    <motion.div className="min-h-screen bg-white">
      <div className="max-w-[1400px] mx-auto px-6 pt-32">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div className="space-y-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="relative"
            >
              <div className="absolute -top-8 left-0 w-20 h-20 bg-[#A3C1E5]/10 rounded-full blur-2xl"></div>
              <div className="absolute top-20 right-20 w-20 h-20 bg-[#A9D4A7]/10 rounded-full blur-2xl"></div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold font-sans text-black/60 leading-tight mb-6 relative">
                Renewing Hope,
                <span className="block font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#A3C1E5] to-[#A9D4A7]">
                  One Conversation At A Time.
                </span>
              </h1>
              <p className="text-gray-600 text-xl leading-relaxed">
                Your personal AI companion for mental wellness, available 24/7 with complete privacy and personalised support.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={handleStartChat}
                className="group relative overflow-hidden bg-gradient-to-r from-[#A3C1E5] to-[#A9D4A7] text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-500"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 font-medium">
                  Start Your Journey
                  <FiSmile className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#A9D4A7] to-[#A3C1E5] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.6}
              className="grid grid-cols-3 gap-6"
            >

              {[
                { icon: FiLock, title: "Safe Space", desc: "A judgment-free zone where your thoughts stay between us.", color: "#A3C1E5" },
                { icon: FiUser, title: "Tailored to You", desc: "Smart support that adapts to your unique thoughts, goals, and mood.", color: "#A9D4A7" },
                { icon: FiHeart, title: "Here When You Need It", desc: "A constant, compassionate presence day or night, rain or shine.", color: "#C8A2D4" }
              ].map((feature, idx) => (
                <div key={idx} className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className={`w-12 h-12 bg-[${feature.color}]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`text-[${feature.color}] text-xl`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>



{/* TODO: Add dashboard preview 



*/}


          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.8}
            className="relative hidden md:block"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">Your Wellness Journey</h2>
                  <p className="text-gray-500">Weekly Progress Overview</p>
                </div>
                <div className="flex gap-2">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, idx) => (
                    <div key={idx} className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm
                      ${idx === 3 ? 'bg-[#A3C1E5] text-white' : 'text-gray-400'}`}>
                      {day}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mood Chart */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-700">Mood Tracking</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FiCalendar /> This Week
                  </div>
                </div>
                <div className="h-32 flex items-end gap-2">
                  {[60, 75, 65, 80, 70, 85, 75].map((height, idx) => (
                    <div key={idx} className="flex-1 bg-gradient-to-t from-[#A3C1E5]/20 to-[#A9D4A7]/20 rounded-t-lg"
                      style={{ height: `${height}%` }}>
                      <div className="w-full h-1 bg-[#A9D4A7] rounded-t-lg"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-[#A3C1E5]/10 to-[#A9D4A7]/10 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <FiBarChart2 className="text-[#A3C1E5]" />
                    <span className="text-sm text-gray-600">Weekly Sessions</span>
                  </div>
                  <p className="text-2xl font-semibold text-gray-900">12</p>
                </div>
                <div className="bg-gradient-to-br from-[#A9D4A7]/10 to-[#A3C1E5]/10 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <FiSmile className="text-[#A9D4A7]" />
                    <span className="text-sm text-gray-600">Mood Score</span>
                  </div>
                  <p className="text-2xl font-semibold text-gray-900">8.5</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
