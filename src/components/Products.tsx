/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CATEGORIES, PRODUCTS } from '../constants';
import { CategoryId, Product, ViewState } from '../types';
import { ArrowLeft, ChevronRight, Info, Mail, Share2 } from 'lucide-react';

interface ProductsProps {
  categoryId: CategoryId;
  onNavigate: (view: ViewState) => void;
}

export function Products({ categoryId, onNavigate }: ProductsProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => p.category === categoryId);
  }, [categoryId]);

  const currentCategory = useMemo(() => {
    return CATEGORIES.find(c => c.id === categoryId);
  }, [categoryId]);

  return (
    <div className="bg-surface pb-24">
      {/* Breadcrumbs */}
      <div className="bg-surface-variant/20 border-b border-outline">
        <div className="max-w-7xl mx-auto px-4 md:px-16 py-4 flex items-center gap-2 text-sm text-secondary font-body">
          <button 
            onClick={() => onNavigate('home')} 
            className="hover:text-primary hover:underline"
          >
            Home
          </button>
          <ChevronRight className="h-4 w-4 opacity-40" />
          <span className="text-secondary/60">Equipments</span>
          <ChevronRight className="h-4 w-4 opacity-40" />
          <span className="text-on-surface font-semibold">{currentCategory?.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-16 mt-12">
        {/* Header */}
        <div className="mb-12 flex flex-col md:row justify-between items-end gap-6 border-b border-outline pb-8">
          <div className="max-w-2xl">
            <h1 className="font-headline text-5xl font-bold text-primary mb-4">{currentCategory?.name}</h1>
            <p className="text-secondary text-lg font-body">{currentCategory?.description} All the equipment listed here can be custom-sized to your specific floor plan or operational requirements.</p>
          </div>
          <div className="flex gap-4 scrollbar-hide overflow-x-auto w-full md:w-auto pb-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onNavigate(cat.id as ViewState)}
                className={`px-4 py-2 rounded-full border text-sm font-bold whitespace-nowrap transition-all ${
                  cat.id === categoryId 
                    ? 'bg-primary text-on-primary border-primary shadow-lg' 
                    : 'bg-white border-outline text-secondary hover:border-primary/50'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layoutId={`product-${product.id}`}
              whileHover={{ y: -10 }}
              className="bg-white border border-outline rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col industrial-glow h-full"
            >
              <div className="relative aspect-square overflow-hidden bg-surface-variant/10">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-on-background/80 backdrop-blur-sm text-white px-3 py-1 text-xs font-bold tracking-widest uppercase rounded">
                  {product.model}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 font-label">{product.specs}</span>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-3">{product.name}</h3>
                <p className="text-secondary text-sm font-body line-clamp-3 mb-6 flex-grow">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="flex-grow bg-primary text-on-primary px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Info className="h-4 w-4" />
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-32 text-center">
            <Info className="h-16 w-16 text-secondary/20 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-secondary">No equipment listed yet.</h3>
            <p className="text-secondary/60 mt-2">Check back soon or contact us for custom fabrication inquiry.</p>
          </div>
        )}
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-on-background/80 backdrop-blur-sm"
            />
            <motion.div 
              layoutId={`product-${selectedProduct.id}`}
              className="relative bg-white w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:row"
            >
              <div className="md:w-1/2 p-12 bg-surface-variant/20 flex flex-col items-center justify-center relative">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full max-h-[400px] object-contain drop-shadow-2xl"
                />
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-6 left-6 flex items-center gap-2 text-secondary font-bold hover:text-primary transition-all md:hidden"
                >
                  <ArrowLeft className="h-5 w-5" /> Back
                </button>
              </div>
              <div className="md:w-1/2 p-12 flex flex-col">
                <div className="mb-4">
                  <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">{selectedProduct.model} • {selectedProduct.category.toUpperCase()}</span>
                  <h2 className="font-headline text-4xl font-bold text-on-surface mb-4">{selectedProduct.name}</h2>
                  <div className="h-1 w-20 bg-primary mb-6" />
                </div>
                <p className="text-secondary text-lg leading-relaxed mb-8 flex-grow font-body">
                  {selectedProduct.description} 
                  Our {selectedProduct.name} is engineered using SS 304 food-grade material, ensuring the highest standards of hygiene for commercial catering environments.
                </p>
                <div className="bg-surface-variant/30 p-6 rounded-xl border border-outline border-dashed mb-8">
                  <h4 className="font-bold mb-2 text-sm uppercase tracking-wide">Standard Features</h4>
                  <ul className="text-sm text-secondary space-y-2">
                    <li>• Heavy-duty stainless steel build</li>
                    <li>• Precision-engineered component assembly</li>
                    <li>• Ergonomic design for chef efficiency</li>
                    <li>• Easy-to-clean sanitary finish</li>
                  </ul>
                </div>
                <div className="flex gap-4">
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="flex-grow bg-primary text-on-primary py-4 rounded-xl font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                  >
                    <Mail className="h-5 w-5" />
                    Request Price Quote
                  </button>
                  <button className="p-4 bg-outline/20 rounded-xl hover:bg-outline/40 transition-colors">
                    <Share2 className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
