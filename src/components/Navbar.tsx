
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Zap, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const isMobile = useIsMobile();
  
  const MobileMenu = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu size={24} className="text-primary" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[80%] pt-12">
        <nav className="flex flex-col space-y-6">
          <Link to="/" className="text-lg font-medium hover:text-accent transition-colors">
            Home
          </Link>
          <Link to="/pricing" className="text-lg font-medium hover:text-accent transition-colors">
            Pricing
          </Link>
          <Link to="/chat" className="text-lg font-medium hover:text-accent transition-colors">
            Chat
          </Link>
          <Link to="/chat">
            <Button className="bg-accent hover:bg-accent/90 text-white rounded-full w-full mt-4">
              Start Chatting
            </Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-md bg-blynk-blue text-white shadow-sm">
            <Zap size={18} />
          </div>
          <span className="font-bold text-xl tracking-tighter text-primary">Blynk</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/pricing" className="text-sm font-medium hover:text-accent transition-colors">
            Pricing
          </Link>
          <Link to="/chat" className="text-sm font-medium hover:text-accent transition-colors">
            Chat
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          {isMobile ? (
            <MobileMenu />
          ) : (
            <Link to="/chat">
              <Button className="bg-accent hover:bg-accent/90 text-white rounded-full shadow-sm">
                Start Chatting
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
