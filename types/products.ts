export interface Product {
  _id: string;
  title: string;
  price: number;
  quantity: number;
  description?: string;
  discountPercentage: number;
  imageUrl: string;
  productImage: {
    asset: {
      _ref: string;
      _type: "image"; 
      url: string;
    };
  };
  tags: string[];
  colors?: string[]; 
  sizes?: string[]; 
  slug: {
    _type: "slug";
    current: string;
  };
}

