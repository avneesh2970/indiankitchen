/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Award, Building2, Eye, History, LineChart, Target, Users2 } from 'lucide-react';
import { ViewState } from '../types';

interface AboutProps {
  onNavigate: (view: ViewState) => void;
}

export function About({ onNavigate }: AboutProps) {
  return (
    <div className="bg-surface">
      {/* Intro */}
      <section className="py-24 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:row gap-16 items-center">
          <div className="md:w-1/2">
            <h1 className="font-headline text-5xl font-bold text-primary mb-8 leading-tight">Setting the Standard for Commercial Kitchen Fabrication.</h1>
            <p className="text-secondary text-lg leading-relaxed mb-6 font-body">Since 2009, Indian Kitchen Equipments has been at the forefront of stainless steel fabrication for the hospitality industry. What started as a small workshop in New Delhi has expanded into a state-of-the-art manufacturing facility serving top-tier hotel chains and caterers nationwide.</p>
            <p className="text-secondary text-lg leading-relaxed font-body">We believe that a professional kitchen is the heart of every hospitality business. Our mission is to provide chefs with equipment that is as hardworking and reliable as they are, without compromising on sanitation or aesthetics.</p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img className="rounded-2xl h-80 w-full object-cover shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0C0Tj8N_9P5Ff4Z-v2G_J5n9_WfO6R_F_R_V_F_R_V_F_R_V_F_R_V_F_R_V_F_R_V_F_R_V_F_R_V_F_R_V_F_R_V_R" alt="Factory Interior" />
              <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20">
                <Users2 className="h-10 w-10 text-primary mb-4" />
                <h4 className="font-bold text-xl mb-1">50+ Expert Metal Craftsmen</h4>
                <p className="text-secondary text-sm">Highly skilled welders and engineers.</p>
              </div>
            </div>
            <div className="space-y-4 translate-y-8">
              <div className="bg-on-background text-white p-8 rounded-2xl shadow-xl">
                <Award className="h-10 w-10 text-primary-container mb-4" />
                <h4 className="font-bold text-xl mb-1">ISO 9001 Certified</h4>
                <p className="text-white/60 text-sm">Adhering to global quality benchmarks.</p>
              </div>
              <img className="rounded-2xl h-80 w-full object-cover shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0C0Tj8N_9P5Ff4Z-v2G_J5n9_WfO6R_F_R_V_F_R_V_F_R_V_F_R_V_F_R_V_F_R_V_F_R_V_F_R_V_F_R_V_F_R_V_R" alt="Testing Facility" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision/Mission */}
      <section className="py-24 bg-surface-variant/30">
        <div className="px-4 md:px-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-12 rounded-3xl border border-outline shadow-sm flex items-start gap-8 industrial-glow">
            <div className="bg-primary/10 p-5 rounded-2xl"><Target className="h-8 w-8 text-primary" /></div>
            <div>
              <h3 className="font-headline text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-secondary text-lg leading-relaxed font-body">To become the global preferred partner for commercial kitchen solutions by delivering innovative, high-performance, and cost-effective stainless steel equipment tailored to individual operation needs.</p>
            </div>
          </div>
          <div className="bg-white p-12 rounded-3xl border border-outline shadow-sm flex items-start gap-8 industrial-glow">
            <div className="bg-primary/10 p-5 rounded-2xl"><Eye className="h-8 w-8 text-primary" /></div>
            <div>
              <h3 className="font-headline text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-secondary text-lg leading-relaxed font-body">To lead the industrial catering equipment manufacturing sector with sustainable practices and cutting-edge engineering, setting new milestones in hygiene and durability for the hospitality world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold text-primary mb-2">Our Growth Journey</h2>
          <p className="text-secondary max-w-xl mx-auto">Tracing our footsteps from a humble workshop to an industry leader.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { year: '2009', title: 'The Genesis', icon: History, desc: 'Established our first fabrication unit in New Delhi.' },
            { year: '2014', title: 'Market Expansion', icon: LineChart, desc: 'Supplied equipment to over 200 hotel projects across Northern India.' },
            { year: '2019', title: 'ISO Milestone', icon: Building2, desc: 'Achieved ISO 9001:2015 certification for quality management.' },
            { year: '2023', title: 'Future-Ready', icon: Target, desc: 'Implemented AI-driven design optimization and automated laser cutting.' }
          ].map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="text-6xl font-bold text-primary/10 font-headline mb-4 group-hover:text-primary/20 transition-colors">{item.year}</div>
              <h4 className="font-headline text-xl font-bold text-on-surface mb-2">{item.title}</h4>
              <p className="text-secondary text-sm font-body">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
