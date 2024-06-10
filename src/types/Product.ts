// types/Product.ts
export interface Product {
    brand: string;
    product_code: string;
    name: string;
    images: string[];
    specifications: {
      material: string;
      color: string;
      type: string;
      installation_type: string;
      height: string;
      spout_reach: string;
      flow_rate: string;
      warranty: string;
    };
  }
  