/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { ViewState } from '../types';

interface ContactProps {
  onNavigate: (view: ViewState) => void;
}

export function Contact({ onNavigate }: ContactProps) {
  return (
    <div className="bg-surface min-h-[80vh] flex flex-col">
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:row items-center gap-16">
          <div className="md:w-1/2">
            <h1 className="font-headline text-5xl font-bold text-on-surface mb-6">Contact Our Factory</h1>
            <p className="text-secondary text-lg mb-12 font-body">Whether you're starting a new hotel project or upgrading your existing kitchen, our technical consultants are ready to assist with sizing, layout, and fabrication details.</p>
            
            <div className="space-y-8">
              {[
                { icon: MapPin, title: 'Main Factory & Office', desc: 'Indrlok vihar haridwar bye pass road, chowk, near brahmanwala, Dehradun, Uttarakhand 248171' },
                { icon: Phone, title: 'Sales Inquiry', desc: '+91 99975 41550' },
                { icon: Mail, title: 'Email Address', desc: 'info@indiankitchenequipments.com' },
                { icon: Clock, title: 'Business Hours', desc: 'Mon - Sat: 9:00 AM - 7:00 PM' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface">{item.title}</h4>
                    <p className="text-secondary text-sm font-body mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="bg-white border border-outline p-8 md:p-12 rounded-3xl shadow-xl industrial-glow">
              <h3 className="font-headline text-2xl font-bold mb-8">Request for Quote</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-secondary/60">Full Name</label>
                    <input className="w-full bg-surface-variant/20 border border-outline rounded-lg p-3 focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Enter name" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-secondary/60">Email Address</label>
                    <input className="w-full bg-surface-variant/20 border border-outline rounded-lg p-3 focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Email here" type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-secondary/60">Project Type</label>
                  <select className="w-full bg-surface-variant/20 border border-outline rounded-lg p-3 focus:ring-2 focus:ring-primary/20 outline-none">
                    <option>New Restaurant</option>
                    <option>Hotel / Catering</option>
                    <option>Industrial Canteen</option>
                    <option>Upgrade Equipment</option>
                    
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-secondary/60">Message / Specifications</label>
                  <textarea rows={4} className="w-full bg-surface-variant/20 border border-outline rounded-lg p-3 focus:ring-2 focus:ring-primary/20 outline-none" placeholder="What are your requirements? (e.g., specific dimensions, burner count)" />
                </div>
                <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-3">
                  <Send className="h-5 w-5" />
                  Request Catalog & Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-auto h-[400px] w-full contrast-125 border-t border-outline overflow-hidden">
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.157245988708!2d78.0093268!3d30.289584800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092bc95a191b19%3A0x9730c857c39862f1!2sIndian%20Kitchen%20Equipments!5e0!3m2!1sen!2sin!4v1779164023534!5m2!1sen!2sin"
          
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true}
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
