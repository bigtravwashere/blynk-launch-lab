
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-blynk-blue text-white">
                <Zap size={18} />
              </div>
              <span className="font-bold text-xl">Blynk</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Launch digital products in a blynk ⚡
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16 text-center md:text-left">
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Product</h4>
              <nav className="flex flex-col space-y-2">
                <Link to="/pricing" className="text-sm text-gray-500 dark:text-gray-400 hover:text-blynk-blue transition-colors">
                  Pricing
                </Link>
                <Link to="/chat" className="text-sm text-gray-500 dark:text-gray-400 hover:text-blynk-blue transition-colors">
                  Chat
                </Link>
              </nav>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Company</h4>
              <nav className="flex flex-col space-y-2">
                <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-blynk-blue transition-colors">
                  About
                </a>
                <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-blynk-blue transition-colors">
                  Blog
                </a>
              </nav>
            </div>
            
            <div className="space-y-3 col-span-2 sm:col-span-1">
              <h4 className="text-sm font-semibold">Legal</h4>
              <nav className="flex flex-col space-y-2">
                <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-blynk-blue transition-colors">
                  Privacy
                </a>
                <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-blynk-blue transition-colors">
                  Terms
                </a>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Blynk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
