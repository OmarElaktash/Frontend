import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../utils/supabaseClient';
import Link from 'next/link';
import { FiBook, FiBarChart2, FiLogOut, FiMessageSquare } from 'react-icons/fi';
import Image from 'next/image';

export const Header = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      listener?.subscription?.unsubscribe();
    };
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push('/');
  }

  return (
    <nav className={`top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-white'
    }`}>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between h-24 px-6">
          
          {/* LOGO NEEDSRETURNS BACK TO HOME PAGE 
          
          
          */}
          <Link 
            href="/" 
            className="relative group flex items-center"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-[#A3C1E5]/20 to-[#A9D4A7]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Image src="/logo2.png" alt="Logo" 
            width={100} height={100} className="rounded-full" 
            style={{ objectFit: 'cover' }}
            priority
            />

          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            {/* Common Links */}
            <NavLink href="/resources" icon={FiBook}>Resources</NavLink>

            {user ? (
              <>
                <NavLink href="/dashboard" icon={FiBarChart2}>Dashboard</NavLink>
                <div className="w-px h-6 bg-gradient-to-b from-[#A3C1E5]/20 to-[#A9D4A7]/20 mx-2"></div>

          
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-[#A3C1E5] transition-colors duration-300"
                >
                  <FiLogOut className="text-lg" />
                  <span>Logout</span>
                </button>

                <Link 
                  href="/chat"
                  className="flex items-center gap-2 bg-gradient-to-r from-[#A3C1E5] to-[#A9D4A7] text-white px-6 py-2.5 rounded-xl hover:shadow-lg hover:shadow-[#A3C1E5]/20 transition-all duration-300 ml-2"
                >
                  <FiMessageSquare className="text-lg" />
                  <span>Start Chat</span>
                </Link>
              </>
            ) : (
              <>{/* Auth Buttons */}
                <Link 
                  href="/login"
                  className="px-6 py-2 text-sm text-gray-600 hover:text-[#A3C1E5] transition-colors duration-300"
                >
                  Login
                </Link>
                <Link 
                  href="/signup"
                  className="bg-gradient-to-r from-[#A3C1E5] to-[#A9D4A7] text-white px-6 py-2 rounded-xl hover:shadow-lg hover:shadow-[#A3C1E5]/20 transition-all duration-300"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};



const NavLink = ({ href, icon: Icon, children }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  
  return (
    <Link
      href={href}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-300
        ${isActive 
          ? 'text-[#A3C1E5] bg-gradient-to-r from-[#A3C1E5]/10 to-[#A9D4A7]/10' 
          : 'text-gray-600 hover:text-[#A3C1E5]'
        }
      `}
    >
      <Icon className="text-lg" />
      <span>{children}</span>
    </Link>
  );
};
