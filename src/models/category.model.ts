export const PRODUCT_CATEGORIES = [
  "Computadores",
  "Accesorios",
  "Monitores",
  "Periféricos",
  "Audio"
] as const;

export type ProductCategory =
  (typeof PRODUCT_CATEGORIES)[number];

export interface Category {
  id: number;
  name: ProductCategory;
  description?: string;
  active: boolean;
}
