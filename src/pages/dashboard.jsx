import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import { FiCalendar, FiBarChart2, FiSmile, FiClock, FiTrendingUp } from 'react-icons/fi';

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

export default function Dashboard() {
  const [userName, setUserName] = useState('Loading...');
  const [userId, setUserId] = useState(null);
  const [moods, setMoods] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [inputMood, setInputMood] = useState('');
  const currentTime = new Date().getHours();
  const greeting = currentTime < 12 ? "Good Morning" : currentTime < 18 ? "Good Afternoon" : "Good Evening";

  useEffect(() => {
    async function fetchUserInfo() {
      const { data, error } = await supabase.auth.getUser();
      if (data?.user) {
        setUserName(data.user.user_metadata.name || 'Friend');
        setUserId(data.user.id);
      }
    }

    fetchUserInfo();
  }, []);

  useEffect(() => {
    async function fetchTodaysMoods() {
      if (!userId) return;

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const { data, error } = await supabase
        .from('mood_entries')
        .select('*')
        .eq('user_id', userId)
        .gte('created_at', today.toISOString())
        .order('created_at', { ascending: true });

      if (data) {
        setMoods(data);
      }
    }

    fetchTodaysMoods();
  }, [userId, refresh]);

  const handleMoodSubmit = async () => {
    if (!userId || !inputMood || isNaN(inputMood) || inputMood < 1 || inputMood > 5) {
      alert('Please enter a valid mood between 1 and 5');
      return;
    }

    const { error } = await supabase
      .from('mood_entries')
      .insert([
        {
          user_id: userId,
          mood_score: parseInt(inputMood),
          created_at: new Date().toISOString(),
        }
      ]);

    if (!error) {
      setRefresh(prev => !prev);
      setInputMood(''); 
    } else {
      console.error('Error saving mood:', error);
    }
  };

  const getCurrentTimeBlock = () => Math.floor(currentTime / 3);

  const calculateWeeklyAverage = () => {
    if (moods.length === 0) return 0;
    const total = moods.reduce((sum, m) => sum + m.mood_score, 0);
    return (total / moods.length).toFixed(1);
  };

  return (
    <motion.div className="min-h-screen bg-white">
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="mb-8"
        >
          <h1 className="text-4xl font-semibold text-black/60">
            {greeting}, <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A3C1E5] to-[#A9D4A7]">{userName}</span>
          </h1>
          <p className="text-gray-600 mt-2">Track your wellness journey and daily progress</p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="mb-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Today's Mood Tracker</h2>
            <div className="flex items-center gap-2 text-gray-600">
              <FiClock className="text-[#A3C1E5]" />
              <span>Every 3 hours</span>
            </div>
          </div>

          {/* Input Mood */}
          <div className="flex gap-4 items-center mb-6">
            <input
              type="number"
              min="1"
              max="5"
              value={inputMood}
              onChange={(e) => setInputMood(e.target.value)}
              placeholder=""
              className="border border-gray-300 px-8 py-2 rounded-lg focus:outline-none focus:border-blue-400"
            />
            <button
              onClick={handleMoodSubmit}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Mood
            </button>
          </div>

          {/* Time blocks */}
          <div className="grid grid-cols-8 gap-4 mb-6">
            {Array.from({ length: 8 }, (_, i) => {
              const blockHour = i * 3;
              const mood = moods.find(m => {
                const moodHour = new Date(m.created_at).getHours();
                return Math.floor(moodHour / 3) === i;
              });

              return (
                <div
                  key={i}
                  className={`p-4 rounded-lg text-center ${
                    getCurrentTimeBlock() === i
                      ? 'bg-gradient-to-r from-[#A3C1E5]/20 to-[#A9D4A7]/20 border-2 border-[#A3C1E5]'
                      : 'bg-gray-50'
                  }`}
                >
                  <div className="text-sm text-gray-600 mb-2">
                    {`${blockHour.toString().padStart(2, '0')}:00`}
                  </div>
                  {mood ? (
                    <div className="text-lg font-bold text-gray-800">{mood.mood_value}</div>
                  ) : (
                    <div className="text-gray-400 text-lg">-</div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mood Range Legend */}
          <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
            <div>1 = Poor</div>
            <div>2 = Not Great</div>
            <div>3 = Okay</div>
            <div>4 = Good</div>
            <div>5 = Excellent</div>
          </div>
        </motion.div>
            
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="bg-white rounded-xl shadow-xl p-6 border border-gray-100"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Daily Overview</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center p-4 bg-blue-50 rounded-xl">
              <FiSmile className="text-blue-600 text-4xl mb-2" />
              <p className="text-gray-600">Average Mood</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">{calculateWeeklyAverage()}</p>
            </div>

            <div className="flex flex-col items-center p-4 bg-green-50 rounded-xl">
              <FiCalendar className="text-green-600 text-4xl mb-2" />
              <p className="text-gray-600">Entries Today</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">{moods.length}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
