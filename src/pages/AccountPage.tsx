
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AccountPage = () => {
  // This would normally be fetched from your auth system
  const user = {
    name: 'Demo User',
    email: 'demo@example.com',
    plan: 'Free',
    usageCount: 0,
    maxUsage: 1,
    joinDate: new Date().toLocaleDateString()
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">My Account</h1>
            <p className="text-gray-600 dark:text-gray-300">Manage your account settings and view your usage</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-blynk-blue/10 flex items-center justify-center text-2xl font-bold text-blynk-blue">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="font-bold text-xl">{user.name}</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{user.email}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Current Plan</p>
                    <p className="font-medium">{user.plan}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Member Since</p>
                    <p className="font-medium">{user.joinDate}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
                <h2 className="font-bold text-xl mb-4">Usage</h2>
                
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-300">Product Generations</span>
                    <span className="text-sm font-medium">{user.usageCount} / {user.maxUsage}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-blynk-blue h-2.5 rounded-full" 
                      style={{ width: `${(user.usageCount / user.maxUsage) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <Link to="/pricing">
                    <Button className="bg-blynk-blue hover:bg-blynk-blue/90 text-white">
                      Upgrade to Pro
                    </Button>
                  </Link>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Get unlimited generations and more features
                  </p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="font-bold text-xl mb-4">Settings</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 text-sm"
                      defaultValue={user.name}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 text-sm"
                      defaultValue={user.email}
                    />
                  </div>
                  
                  <div>
                    <Button className="mr-2">Save Changes</Button>
                    <Button variant="outline">Reset Password</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AccountPage;
