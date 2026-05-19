/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Category, Product } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'cooking',
    name: 'Cooking Range',
    icon: 'CookingPot',
    description: 'High-performance gas and electric solutions.'
  },
  {
    id: 'utility',
    name: 'Kitchen Utility',
    icon: 'Table',
    description: 'Essential prep and cleaning stations.'
  },
  {
    id: 'cold',
    name: 'Cold Equipment',
    icon: 'Snowflake',
    description: 'Precision refrigeration and display units.'
  },
  {
    id: 'washing',
    name: 'Washing & Baking',
    icon: 'WashingMachine',
    description: 'Industrial dishwashing and baking systems.'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '31',
    model: 'Model 31',
    name: 'Three Sink Unit',
    category: 'washing',
    description: 'Sanitary design with deep bowls and integrated splashback. Ideal for high-volume dishwashing stations.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFH7-74ZTmHgEfHRWIc5Y14HzrH16Sw_28OPprFLyg3DG19huh_SfRheG_ltuiXYLRn5rnReHqifdISaWiBxTsYOsqIYZHOLQ_MAQHZ24HG46SNCBjuNp03FQ4AJF1hi61c73FzeTUMZmy6N2iDQWn_S3JSmSgfZ7rkLwXR2iTnaWbs4T3rY6Y8HT4Ie34QPXfpHaeQO3KZtAtSOXxRwkwiQ5RF4IQ0zQFOG5UgCEHlQE4oZczLEgubiGttXWreHA10PB4NcRPai7g',
    specs: 'Sanitary Design'
  },
  {
    id: '01',
    model: 'Model 01',
    name: 'Two Burner Range',
    category: 'cooking',
    description: 'Premium stainless steel body with heavy-duty brass burners for high-efficiency commercial cooking.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgaoXkBsp5PcYJQKu5GMUfmodH2kF2mCS1cF892xhkhJ2u1Zt_OQAqPZqvlzkWlDQyFV1aXhZoLunp1u5QxWkSypJCRG97CXHLuRRNEexcXC6IaODiSBxfEImZx9xgD8Jme61V2ILaNcMa-0B2Qe5haox6QHWQ6AFcBr0Mzl5SuLiF5mrRFjTaeUmt04EtHj23leTX5ZAbO2ObegXA1godgPIpcHRAT3NI_RzT8JNGa2CtpyvG6z5Fgx1WRRt9bDOIMe0O6FgMd1vw',
    specs: 'SS 304 Grade'
  },
  {
    id: '15',
    model: 'Model 15',
    name: 'Vertical Chiller',
    category: 'cold',
    description: 'Precision temperature control with double-glazed glass and energy-efficient cooling system.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsKahbd6C7VQaJfrVheqL_8bb1skwk7AYKttH4eoDKGCRsOOlbq_TA0V_CDBB0a2pFIk8FahETf0rwOyK57-gI59_NxN8WGhCMnoifjwxmA6jOfjB-kvvCoFevkHbalTsVy-nK9Vn0pXflkW8gHAuJr4PRvs1anVIRDCXTLUppfF3K8kb6uxWOoc7fHfvpiHGDmIa4-HdA174xsJTzDnWMgtv3vKkjHa9bKH0nH7_1wXvcVzWSH9TAlbsofqY513VBY3QO3dCdfGQ2',
    specs: 'Digital Control'
  },
  {
    id: '42',
    model: 'Model 42',
    name: 'Deck Baking Oven',
    category: 'washing',
    description: 'Multi-deck oven with independent heating zones for consistent baking quality in bakery production.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsKahbd6C7VQaJfrVheqL_8bb1skwk7AYKttH4eoDKGCRsOOlbq_TA0V_CDBB0a2pFIk8FahETf0rwOyK57-gI59_NxN8WGhCMnoifjwxmA6jOfjB-kvvCoFevkHbalTsVy-nK9Vn0pXflkW8gHAuJr4PRvs1anVIRDCXTLUppfF3K8kb6uxWOoc7fHfvpiHGDmIa4-HdA174xsJTzDnWMgtv3vKkjHa9bKH0nH7_1wXvcVzWSH9TAlbsofqY513VBY3QO3dCdfGQ2',
    specs: 'Industrial Grade'
  },
  {
    id: '08',
    model: 'Model 08',
    name: 'SS Square Tandoor',
    category: 'cooking',
    description: 'Authentic clay lining with modern SS exterior. Exceptional heat retention for commercial volume.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgaoXkBsp5PcYJQKu5GMUfmodH2kF2mCS1cF892xhkhJ2u1Zt_OQAqPZqvlzkWlDQyFV1aXhZoLunp1u5QxWkSypJCRG97CXHLuRRNEexcXC6IaODiSBxfEImZx9xgD8Jme61V2ILaNcMa-0B2Qe5haox6QHWQ6AFcBr0Mzl5SuLiF5mrRFjTaeUmt04EtHj23leTX5ZAbO2ObegXA1godgPIpcHRAT3NI_RzT8JNGa2CtpyvG6z5Fgx1WRRt9bDOIMe0O6FgMd1vw',
    specs: 'Traditional+Modern'
  },
  {
    id: '22',
    model: 'Model 22',
    name: 'Exhaust Hood Unit',
    category: 'utility',
    description: 'Efficient ventilation solution with removable baffle filters and robust hanging system.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFH7-74ZTmHgEfHRWIc5Y14HzrH16Sw_28OPprFLyg3DG19huh_SfRheG_ltuiXYLRn5rnReHqifdISaWiBxTsYOsqIYZHOLQ_MAQHZ24HG46SNCBjuNp03FQ4AJF1hi61c73FzeTUMZmy6N2iDQWn_S3JSmSgfZ7rkLwXR2iTnaWbs4T3rY6Y8HT4Ie34QPXfpHaeQO3KZtAtSOXxRwkwiQ5RF4IQ0zQFOG5UgCEHlQE4oZczLEgubiGttXWreHA10PB4NcRPai7g',
    specs: 'HE Ventilation'
  }
];
