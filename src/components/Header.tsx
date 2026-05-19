/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ViewState } from '../types';

interface HeaderProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export function Header({ currentView, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'cooking', label: 'Cooking' },
    { id: 'utility', label: 'Utility' },
    { id: 'cold', label: 'Cold' },
    { id: 'washing', label: 'Washing' },
    { id: 'about', label: 'About' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface border-b border-outline">
      <nav className="max-w-7xl mx-auto px-4 md:px-16 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
          {/* <img 
            alt="Indian Kitchen Equipments" 
            className="h-20 w-20 object-contain" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoUyp6-K-rsQU-Eyprt6PwpstEIxqW-4I66ASwgYFEojeCLBIXS0eGhClj4DSKJU9s2u3JmlgQNsyhzeo-FQFIJVyyAAf3wl4P8VjnSTKEWTSN28qMXnul8-sGyst5Op_iVlvN-_ZfGB7s_f75s_5T7OTR4bBPejs1tFkmvxWGzBXB5Mphv5sQ51vhZoVx8Y43qbnuQpKXdO_f4mIzKPqmNSSEIf56QyCMYAtB1K94ssctgI8szKCFCjOxvvvLk3RZagJU5Nj3JLQu"
          /> */}
          <span className="font-headline text-xl md:text-2xl font-bold text-primary whitespace-nowrap">
            Indian Kitchen Equipments
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id as ViewState)}
              className={`font-body font-semibold transition-all duration-200 border-b-2 hover:text-primary ${
                currentView === item.id 
                  ? 'text-primary border-primary' 
                  : 'text-secondary border-transparent'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* <div className="hidden lg:flex items-center bg-surface-variant px-3 py-1.5 rounded-lg border border-outline">
            <Search className="h-4 w-4 text-secondary mr-2" />
            <input 
              className="bg-transparent border-none focus:ring-0 text-sm w-32 xl:w-48 placeholder:text-secondary/60" 
              placeholder="Search equipment..." 
              type="text"
            />
          </div> */}
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-primary text-on-primary px-5 py-2 rounded font-semibold hover:bg-primary/90 transition-all active:scale-95 whitespace-nowrap text-sm"
          >
            Request Quote
          </button>
          
          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface border-t border-outline-variant p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id as ViewState);
                setIsMobileMenuOpen(false);
              }}
              className={`font-body font-semibold text-left py-2 px-4 rounded ${
                currentView === item.id ? 'bg-primary/10 text-primary' : 'text-secondary'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="flex items-center bg-surface-variant p-3 rounded-lg border border-outline-variant mt-2">
            <Search className="h-5 w-5 text-secondary mr-2" />
            <input className="bg-transparent border-none focus:ring-0 text-sm w-full" placeholder="Search..." type="text" />
          </div>
        </div>
      )}
    </header>
  );
}
