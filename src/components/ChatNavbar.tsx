
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';

interface ChatNavbarProps {
  onUpgradeClick: () => void;
}

const ChatNavbar = ({ onUpgradeClick }: ChatNavbarProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-md bg-blynk-blue text-white">
            <Zap size={18} />
          </div>
          <span className="font-bold text-xl">Blynk</span>
        </Link>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            className="border-blynk-blue text-blynk-blue hover:bg-blynk-blue/10"
            onClick={onUpgradeClick}
          >
            Upgrade to Pro
          </Button>
          <Link to="/account">
            <Button variant="ghost" size="icon" className="rounded-full">
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-sm font-medium">U</span>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default ChatNavbar;
