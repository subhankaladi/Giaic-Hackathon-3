export interface Product {
    _id: string;
    _type: 'product';
    name: string;
    image?: {
      _type: 'image';
      asset: {
        _type: 'reference';
        _ref: string;
      };
    };
    price: number;
    originalPrice: number;
    rating: number;
    reviews: number;
    description: string;
    tags: string[];
    sizes: string[];
    stock_quantity: number;
    category: string;
    slug: {
      _type: 'slug';
      current: string;
    };
    quantity: number; // Add this line
}
