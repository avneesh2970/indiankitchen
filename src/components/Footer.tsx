/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { ViewState } from '../types';

interface FooterProps {
  onNavigate: (view: ViewState) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-on-background text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <img 
              alt="Logo" 
              className="h-8 w-8 object-contain" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoUyp6-K-rsQU-Eyprt6PwpstEIxqW-4I66ASwgYFEojeCLBIXS0eGhClj4DSKJU9s2u3JmlgQNsyhzeo-FQFIJVyyAAf3wl4P8VjnSTKEWTSN28qMXnul8-sGyst5Op_iVlvN-_ZfGB7s_f75s_5T7OTR4bBPejs1tFkmvxWGzBXB5Mphv5sQ51vhZoVx8Y43qbnuQpKXdO_f4mIzKPqmNSSEIf56QyCMYAtB1K94ssctgI8szKCFCjOxvvvLk3RZagJU5Nj3JLQu"
            />
            <span className="font-headline text-xl font-bold text-primary-container">
              Indian Kitchen Equipments
            </span>
          </div>
          <p className="text-secondary-container/70 text-sm leading-relaxed mb-6">
            Leaders in custom commercial kitchen manufacturing and planning since 2009. We specialize in high-grade stainless steel fabrication for global hospitality brands.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-headline font-bold text-lg mb-6 text-primary-container">Equipment</h4>
          <ul className="space-y-4 text-secondary-container/70 text-sm">
            <li><button onClick={() => onNavigate('cooking')} className="hover:text-primary-container hover:underline transition-all">Cooking Range</button></li>
            <li><button onClick={() => onNavigate('utility')} className="hover:text-primary-container hover:underline transition-all">Kitchen Utility</button></li>
            <li><button onClick={() => onNavigate('cold')} className="hover:text-primary-container hover:underline transition-all">Cold Equipment</button></li>
            <li><button onClick={() => onNavigate('washing')} className="hover:text-primary-container hover:underline transition-all">Washing & Baking</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline font-bold text-lg mb-6 text-primary-container">Company</h4>
          <ul className="space-y-4 text-secondary-container/70 text-sm">
            <li><button onClick={() => onNavigate('about')} className="hover:text-primary-container hover:underline transition-all">About Us</button></li>
            <li><button onClick={() => onNavigate('home')} className="hover:text-primary-container hover:underline transition-all">Manufacturing</button></li>
            <li><button onClick={() => onNavigate('contact')} className="hover:text-primary-container hover:underline transition-all">Contact Us</button></li>
            <li><button onClick={() => onNavigate('home')} className="hover:text-primary-container hover:underline transition-all">Client Testimonials</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline font-bold text-lg mb-6 text-primary-container">Contact Us</h4>
          <ul className="space-y-4 text-secondary-container/70 text-sm">
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-primary-container" />
              <span>Indrlok vihar haridwar bye pass road, chowk, near brahmanwala, Dehradun, Uttarakhand 248171</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-5 w-5 shrink-0 text-primary-container" />
              <span>+91 99975 41550</span>
            </li>
            <li className="flex gap-3">
              <Mail className="h-5 w-5 shrink-0 text-primary-container" />
              <span className="break-all">info@indiankitchenequipments.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-16 mt-16 pt-8 border-t border-white/10 flex flex-col md:row justify-between items-center text-xs text-secondary-container/40">
        <p>© 2026 Indian Kitchen Equipments. All Rights Reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0"> 
          <a href="https://novanectar.co.in/" className="hover:underline">Powered by Novanectar Services Pvt. Ltd.</a>
        </div>
        {/* <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
         
        </div> */}
      </div>
    </footer>
  );
}
