
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              No hidden fees, no complicated tiers. Just launch your products faster.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="mb-6">
                <h2 className="text-2xl font-bold">Free</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-1">Try before you buy</p>
              </div>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-gray-600 dark:text-gray-300">/month</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="mr-2 text-blynk-blue">
                    <Check size={18} />
                  </div>
                  <span>1 product generation session</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 text-blynk-blue">
                    <Check size={18} />
                  </div>
                  <span>Basic landing page copy</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 text-blynk-blue">
                    <Check size={18} />
                  </div>
                  <span>Copy to clipboard functionality</span>
                </li>
              </ul>
              
              <Link to="/chat">
                <Button 
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-xl"
                >
                  Start for Free
                </Button>
              </Link>
            </div>
            
            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-blynk-blue to-blynk-blue/90 text-white rounded-2xl p-8 border border-blynk-blue/20 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blynk-mint text-xs font-bold text-gray-900 py-1 px-3 rounded-bl-lg">
                MOST POPULAR
              </div>
              
              <div className="mb-6">
                <h2 className="text-2xl font-bold">Pro</h2>
                <p className="text-white/70 mt-1">For serious creators</p>
              </div>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-white/70">/month</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="mr-2 text-blynk-mint">
                    <Check size={18} />
                  </div>
                  <span>Unlimited product generations</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 text-blynk-mint">
                    <Check size={18} />
                  </div>
                  <span>Advanced landing page copy with A/B options</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 text-blynk-mint">
                    <Check size={18} />
                  </div>
                  <span>Custom product visuals (Coming Soon)</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 text-blynk-mint">
                    <Check size={18} />
                  </div>
                  <span>Export to Notion & Gumroad (Coming Soon)</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 text-blynk-mint">
                    <Check size={18} />
                  </div>
                  <span>Priority support</span>
                </li>
              </ul>
              
              <Button 
                className="w-full bg-white hover:bg-gray-100 text-blynk-blue font-medium rounded-xl"
                onClick={() => {
                  alert("Coming soon!");
                }}
              >
                Upgrade to Pro
              </Button>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-left">
                <h3 className="text-lg font-semibold mb-2">How does the free plan work?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The free plan gives you one complete session with Blynk, where you'll get 3 product ideas and can generate landing page copy for one of them.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-left">
                <h3 className="text-lg font-semibold mb-2">Can I cancel my subscription anytime?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, you can cancel your Pro subscription at any time. You'll continue to have Pro access until the end of your billing period.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-left">
                <h3 className="text-lg font-semibold mb-2">What's coming in future updates?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We're working on integrations with Notion, Gumroad, and other platforms, plus AI-generated product visuals, pricing calculators, and more!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
