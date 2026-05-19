/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, DraftingCompass, Factory, HandMetal, Microscope, ShieldCheck, ShoppingCart, Target } from 'lucide-react';
import { ViewState } from '../types';

interface HomeProps {
  onNavigate: (view: ViewState) => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-on-background">
        <div className="absolute inset-0 opacity-40">
          <img 
            className="w-full h-full object-cover" 
            alt="Commercial Kitchen"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBocRAeixoRfqicLn9CR2AMdsg126LUscwj-dWeD-LaKyIP4slQZna51q14j_y_gtA7DWDUEbgghih1JOf59uVtdiAtOgVqziYRxg-zVcRBDg-A6S3VLZWlX_RH7Utps8VIBm4zCyfCAAv8JhYBlyHXYj-ArhDTXxzVCys-9lUSu-aP5tBWWQir3GH7N1vBwKuL_q718UCgu_ejjPN-X9e15k_gu6gUbxxxF5_iQC0f9ObFoFO_Cl7Z2VlwB1IM5LoPjYqIUf972nRW"
          />
        </div>
        <div className="relative z-10 px-4 md:px-16 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white"
          >
            <div className="inline-block bg-primary px-3 py-1 mb-6 font-label text-xs uppercase tracking-[0.2em] text-on-primary">
              Precision Engineering Since 1998
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Quality Stainless Steel <span className="text-primary-container">Manufacturing</span>
            </h1>
            <p className="font-body text-lg mb-8 max-w-lg opacity-90 text-surface-variant">
              Crafting high-performance commercial kitchen equipment that meets rigorous international standards for hygiene, safety, and durability.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => onNavigate('cooking')}
                className="bg-primary text-on-primary px-8 py-4 font-bold hover:bg-primary/90 transition-all flex items-center gap-2"
              >
                Explore Catalog
                <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                onClick={() => onNavigate('about')}
                className="border border-white text-white px-8 py-4 font-bold hover:bg-white/10 transition-all"
              >
                Our Story
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="hidden md:flex justify-end"
          >
            <div className="bg-surface p-10 border border-outline shadow-2xl relative max-w-sm">
              <div className="relative z-10 border-l-4 border-primary pl-6">
                <span className="text-primary font-bold block mb-2 font-label uppercase tracking-widest text-xs">Engineering Standards</span>
                <p className="text-on-surface font-headline text-2xl italic font-semibold">
                  "The benchmark of stainless steel durability in Indian hospitality."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline text-4xl font-bold mb-8 text-primary">Equipment Made According to Your Specification</h2>
            <p className="text-secondary text-lg mb-8 font-body">
              At Indian Kitchen Equipments, we understand that no two commercial kitchens are the same. Our manufacturing process is built on flexibility and precision, allowing us to tailor every unit—from two-burner ranges to elaborate multi-sink systems—to your specific space and operational requirements.
            </p>
            <div className="space-y-6">
              {[
                { title: 'Grade SS 304 & 316', desc: 'We exclusively use premium-grade stainless steel for superior corrosion resistance.' },
                { title: 'Argon Arc Welding', desc: 'Seamless joints ensure maximum sanitation and structural integrity.' },
                { title: 'ISO Certified Standards', desc: 'Every piece undergoes rigorous stress testing and quality audit cycles.' }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-on-background text-lg">{item.title}</h4>
                    <p className="text-secondary font-body">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              className="rounded-lg w-full h-[320px] object-cover border border-outline industrial-glow" 
              alt="Welding"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlPHTG0v2TDX4K2Yz0kh7nEMWo-r6SraPG5KcntfXE0cFTlfFowucZowIBpAGr2uVVZW47wcfE72MUgONZKhOv7lrd4vgnTa4nuqSbNMHDWMRqkVX2-pyem0LMblDRE5sy2u6mzlCXI8hEf6ofcNPZNpk0wTDizBS9V_8hOYTJ4FGxV5XX_dHCJbFi145a6vBHAiHHrjMWB15QLewc9-wG0vos6eRwvWTzEbLZ35CpfdeKGeLffwXtgUveZbIjYU5lnMYcV8RKH0XS" 
            />
            <img 
              className="rounded-lg w-full h-[320px] object-cover border border-outline industrial-glow mt-12" 
              alt="Design"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqH4A0zwPdad6IFovxCtUCyEoFYcf6eNx-MBrzkICqC9JQBQAQFaVJlsKxPRXxqgp_dK3JcpRYYqPeFwd9PeQS068vdiKIvQG0mSvSOyvRCFqWCT5xoLt9jpVZZhlGlGmWDV6IN9SEaQF0lkLsauU7-OLZeFtgJjj-WE2LtbQSu7Xsya8ynCKEPlIlI_RtwowEC36ISWqLtXYC8LcOQ_bK5LBj6z1WpmjksW2DDGGEsX0RL63bcwTATJGqkCxkonUkVPKAb-f3nlUq" 
            />
          </div>
        </div>
      </section>

      {/* Lifecycle Section (Bento Grid) */}
      <section className="py-24 bg-surface-variant/30">
        <div className="px-4 md:px-16 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-bold text-primary mb-4">Our Manufacturing Lifecycle</h2>
            <p className="text-secondary max-w-2xl mx-auto font-body text-lg">From raw steel to professional-grade installations, our process is optimized for heavy-duty performance.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">
            {/* Step 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-8 bg-surface border border-outline p-8 rounded-xl flex flex-col md:flex-row gap-8 industrial-glow"
            >
              <div className="flex-1">
                <span className="text-5xl font-bold text-primary/10 mb-4 block font-headline">01</span>
                <h3 className="font-headline text-2xl font-bold mb-4">Design & Customization</h3>
                <p className="text-secondary font-body">Consultation with architects and chefs to create equipment blueprints that maximize kitchen throughput and ergonomic efficiency.</p>
                <div className="mt-6 flex items-center gap-2 text-primary font-bold cursor-pointer hover:gap-3 transition-all">
                  View Case Study <ArrowRight className="h-4 w-4" />
                </div>
              </div>
              <img 
                className="flex-1 h-56 object-cover rounded-lg" 
                alt="Blueprints"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMysanAAFQS8426R-SVreC1xangNWA32-Mc-HMPKnx7EQGhRo6qEzMrGC4TvGf2_ZMlpR2L1Tmqmm0jFM15hFCXyIeuM1cDpLWgiR6_nxoAuMTh8_iwuBzsvaHK9ERfDGhg6XB9lH3vPVpmHZxb34P_3_2Fwvaa53fis-PXfjKCPdJHpyAL7vMkNQHbG2ybwvjKPEXHI6_ZUcprc8xhBRKxgOenyhReLd6dFrjEio8JLmTJavR8XJypbpAifulK6TCy95f6m2ygMAE" 
              />
            </motion.div>

            {/* Step 2 */}
            <div className="md:col-span-4 bg-primary text-on-primary p-8 rounded-xl flex flex-col justify-center text-center">
              <Factory className="h-16 w-16 mx-auto mb-6 text-primary-container" />
              <h3 className="font-bold text-2xl mb-4 font-headline">Laser Cutting</h3>
              <p className="opacity-80 font-body">Computer-controlled precision cutting ensures tolerances within 0.1mm for perfect component assembly.</p>
            </div>

            {/* Step 3 */}
            <div className="md:col-span-4 bg-surface border border-outline p-8 rounded-xl flex flex-col justify-between industrial-glow">
              <div>
                <span className="text-5xl font-bold text-primary/10 mb-4 block font-headline">02</span>
                <h3 className="font-bold text-2xl mb-2 font-headline">Manual Finish</h3>
                <p className="text-secondary font-body">Hand-polishing to a Scotch-brite or Mirror finish for superior sanitary performance.</p>
              </div>
              <div className="h-32 bg-secondary-container/30 rounded-lg flex items-center justify-center mt-6">
                <HandMetal className="h-12 w-12 text-secondary" />
              </div>
            </div>

            {/* Step 4 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-8 bg-on-background text-white p-8 rounded-xl flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="flex-1">
                <span className="text-5xl font-bold text-white/5 mb-4 block font-headline">03</span>
                <h3 className="font-headline text-2xl font-bold mb-4">Final Testing</h3>
                <p className="opacity-70 font-body">Every burner, refrigeration compressor, and dishwasher unit undergoes a 24-hour stress test before dispatch.</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-full"><Microscope className="h-6 w-6 text-primary-container" /></div>
                  <div className="bg-white/10 p-3 rounded-full"><ShieldCheck className="h-6 w-6 text-primary-container" /></div>
                </div>
              </div>
              <img 
                className="flex-1 w-full h-full min-h-[160px] object-cover rounded-lg" 
                alt="Testing"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzoWgAsg0kc70ixNKnvguXZynQgB8dhMq3llZtUq8dKuxSUkEBuv5FY59Dx9L0xDohh1HxkX9hvotTvgrLxMjFVr0k9DjhvAIMpvTha5gOE_9HVk0lZW6LBKHgrT_Y5ZoJ0QK1mpqcJbN-J6zZNniQvanHR9yj0nhUOZcIzzyA56ATqyWv-DCv_OPiNSRzAaqZfJzhd8mcwi38leMONTFi4Dj6XFnLtraEOs1Vb8cZO_NDgqg4vv_W0--YJ-lBs2oGyjUF0mNPszmG" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="bg-on-background rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row justify-between items-center gap-12 border border-outline overflow-hidden relative">
          <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
            <DraftingCompass className="h-96 w-96 text-white" />
          </div>
          <div className="lg:max-w-xl relative z-10">
            <h2 className="font-headline text-4xl font-bold text-white mb-6">Need a Custom Solution?</h2>
            <p className="text-surface-variant/80 text-lg mb-8 font-body">
              Our expert consultants specialize in commercial kitchen setup, from initial layout design to equipment manufacturing. We provide end-to-end expertise for hotels, restaurants, industrial canteens, and hospital kitchens.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-primary text-on-primary px-8 py-4 font-bold hover:bg-primary/90 transition-all flex items-center gap-2"
              >
                <Target className="h-5 w-5" />
                Book a Consultation
              </button>
              <button className="border border-white text-white px-8 py-4 font-bold hover:bg-white/10 transition-all">
                Download Catalog
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full md:w-auto relative z-10">
            {[
              { val: '25+', label: 'Years Experience' },
              { val: '1200+', label: 'Projects Done' },
              { val: '100%', label: 'Custom Specs' },
              { val: 'ISO', label: '9001:2015' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center">
                <h4 className="text-4xl font-bold text-primary-container font-headline mb-2">{stat.val}</h4>
                <p className="text-xs text-white/50 uppercase font-bold tracking-widest font-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
