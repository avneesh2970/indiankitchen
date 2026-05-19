/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  model: string;
  name: string;
  description: string;
  image: string;
  category: CategoryId;
  specs: string;
}

export type CategoryId = 'cooking' | 'utility' | 'cold' | 'washing';

export interface Category {
  id: CategoryId;
  name: string;
  icon: string;
  description: string;
}

export type ViewState = 'home' | 'cooking' | 'utility' | 'cold' | 'washing' | 'about' | 'contact';
