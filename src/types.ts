export type ProductCategory = 
  | 'all'
  | 'sparklers'
  | 'flower-pot'
  | 'ground-chakkar'
  | 'kids-special'
  | 'kids-gun'
  | 'rocket'
  | 'multiple-sky-shots'
  | 'sky-shots'
  | 'crackers-bom'
  | 'lar';

export interface Product {
  id: string;
  name: string;
  price: number;
  mrp?: number;
  subtitle: string;
  category: ProductCategory;
  description: string;
  features: string[];
  piecesPerBox: string;
  effectDuration: string;
  heightRange: string;
  noiseLevel: 'Low' | 'Medium' | 'High' | 'Grand Salute';
  safetyDistance: string;
  image: string;
  badge?: string;
  featured?: boolean;
  lightingType: string;
  smokeEmission: 'Ultra Low Smoke' | 'Reduced Smoke (Green Crackers)' | 'Standard';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  location?: string;
  burstType: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
