
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-md bg-blynk-blue text-white">
            <Zap size={18} />
          </div>
          <span className="font-bold text-xl">Blynk</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/pricing" className="text-sm font-medium hover:text-blynk-blue transition-colors">
            Pricing
          </Link>
          <Link to="/chat" className="text-sm font-medium hover:text-blynk-blue transition-colors">
            Chat
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/chat">
            <Button className="bg-blynk-blue hover:bg-blynk-blue/90 text-white rounded-full">
              Start Chatting
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
