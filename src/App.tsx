/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Products } from './components/Products';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { ViewState } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home onNavigate={setCurrentView} />;
      case 'cooking':
      case 'utility':
      case 'cold':
      case 'washing':
        return <Products categoryId={currentView} onNavigate={setCurrentView} />;
      case 'about':
        return <About onNavigate={setCurrentView} />;
      case 'contact':
        return <Contact onNavigate={setCurrentView} />;
      default:
        return <Home onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-body selection:bg-primary/20 selection:text-primary">
      <Header currentView={currentView} onNavigate={setCurrentView} />
      
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={setCurrentView} />

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setCurrentView('contact')}
        className="fixed bottom-8 right-8 bg-primary text-on-primary w-16 h-16 rounded-full shadow-2xl flex items-center justify-center z-40 group"
      >
        <span className="material-symbols-outlined text-3xl">chat_bubble</span>
        <span className="absolute right-20 bg-on-background text-white px-4 py-2 text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Request Quote
        </span>
      </motion.button>
    </div>
  );
}
