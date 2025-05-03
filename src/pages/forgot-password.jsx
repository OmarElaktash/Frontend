import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import { FiMail, FiArrowRight } from 'react-icons/fi';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'http://localhost:3000/reset-password' // Change to your deployed domain in production
    });

    setLoading(false);
    if (error) setError(error.message);
    else setMessage('Password reset email sent! Check your inbox.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 bg-[#A3C1E5]/20 rounded-full flex items-center justify-center">
              <FiMail className="text-3xl text-[#A3C1E5]" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Forgot Your Password?</h2>
          <p className="text-gray-500">Enter your email and we'll send you a reset link.</p>
        </div>
        <form onSubmit={handleReset} className="space-y-5">
          <div>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A3C1E5] transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#A3C1E5] to-[#A9D4A7] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Sending...' : (
              <>
                Send Reset Link <FiArrowRight />
              </>
            )}
          </button>
        </form>
        {message && <div className="bg-green-100 text-green-700 px-4 py-2 rounded mt-6 text-center">{message}</div>}
        {error && <div className="bg-red-100 text-red-700 px-4 py-2 rounded mt-6 text-center">{error}</div>}
      </div>
    </div>
  );
}
