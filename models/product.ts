export type ProductType = {
  id: number;
  featured: boolean;
  title: string;
  description: string;
  image: string;
  rating: number;
  status: string;
  price: number;
  productCategory: {
    id: number;
    name: string;
  };
};

export enum ProductCategory {
    "id1" = "Giày thể thao",
    "id2" = "Quần nam",
    "id3" = "Vớ thể thao",
    "id5" = "Quần, áo thể thao",
    "id6" = "Áo khoác nam",

}
