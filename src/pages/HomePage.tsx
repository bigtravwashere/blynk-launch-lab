
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="py-12 md:py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blynk-blue text-white text-3xl shadow-lg">
                  ⚡
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                Launch Digital Products in a <span className="text-accent">Blynk</span> <span className="inline-block animate-bounce">⚡</span>
              </h1>
              <p className="text-lg md:text-xl text-blynk-grey max-w-3xl mx-auto mt-6">
                Stop guessing. Chat with Blynk and get viral product ideas + landing pages in minutes.
              </p>
              <div className="mt-8">
                <Link to="/chat">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-accent/20">
                    Start Chatting Free
                  </Button>
                </Link>
              </div>
              
              <div className="mt-12 md:mt-16 w-full max-w-4xl mx-auto bg-gray-50 dark:bg-gray-900 rounded-2xl p-4 md:p-8 shadow-xl border border-gray-100 dark:border-gray-800">
                <div className="chat-demo space-y-6">
                  <div className="chat-bubble-ai">
                    <p className="font-medium">Hey creator! 👋 I'm Blynk, your product launch sidekick. What's your niche or main content topic?</p>
                  </div>
                  <div className="chat-bubble-user">
                    <p className="font-medium">I create fitness content for busy professionals</p>
                  </div>
                  <div className="chat-bubble-ai">
                    <p className="font-medium">Fitness for busy folks? 💪 Oh we're about to make those corporate wallets open! Time is their scarcest resource.</p>
                  </div>
                  <div className="chat-bubble-user">
                    <p className="font-medium">I post mostly on Instagram and TikTok</p>
                  </div>
                  <div className="chat-bubble-ai">
                    <p className="font-medium">Perfect visual platforms for fitness! 📱 Let's cook up something your audience can't ignore...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 md:py-16 px-4 md:px-6 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">How Blynk Works <span className="text-accent">⚡</span></h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="luxurious-card p-6">
                <div className="w-12 h-12 bg-blynk-blue/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl text-blynk-blue">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Chat About Your Content</h3>
                <p className="text-blynk-grey">Answer a few questions about your content, audience, and expertise.</p>
              </div>
              <div className="luxurious-card p-6">
                <div className="w-12 h-12 bg-blynk-blue/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl text-blynk-blue">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Product Ideas</h3>
                <p className="text-blynk-grey">Blynk generates 3 tailored digital product ideas with pricing suggestions.</p>
              </div>
              <div className="luxurious-card p-6">
                <div className="w-12 h-12 bg-blynk-blue/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl text-blynk-blue">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Launch Ready Copy</h3>
                <p className="text-blynk-grey">Get landing page copy with headlines, benefits and CTAs—ready to publish.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to turn your audience into income?</h2>
            <p className="text-xl text-blynk-grey mb-8">Done &gt; Perfect. Let's launch. ⚡</p>
            <Link to="/chat">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-accent/20">
                Start Chatting Free
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
