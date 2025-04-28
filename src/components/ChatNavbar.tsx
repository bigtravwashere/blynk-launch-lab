
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Zap, ArrowLeft } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface ChatNavbarProps {
  onUpgradeClick: () => void;
}

const ChatNavbar = ({ onUpgradeClick }: ChatNavbarProps) => {
  const isMobile = useIsMobile();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 backdrop-blur-lg bg-white/90 dark:bg-opacity-90">
      <div className="container mx-auto flex h-14 md:h-16 items-center justify-between px-3 md:px-6">
        {isMobile ? (
          <Link to="/" className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft size={20} className="text-primary" />
            </Button>
          </Link>
        ) : (
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-md bg-blynk-blue text-white shadow-sm">
              <Zap size={18} />
            </div>
            <span className="font-bold text-xl tracking-tighter text-primary">Blynk</span>
          </Link>
        )}
        
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            className={`border-blynk-blue text-blynk-blue hover:bg-blynk-blue/10 ${isMobile ? 'text-xs px-2 py-1 h-auto' : ''}`}
            onClick={onUpgradeClick}
          >
            {isMobile ? 'Upgrade' : 'Upgrade to Pro'}
          </Button>
          <Link to="/account">
            <Avatar className={`${isMobile ? 'w-7 h-7' : 'w-8 h-8'} bg-gray-200 dark:bg-gray-700`}>
              <AvatarFallback className="text-xs font-medium">U</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default ChatNavbar;
