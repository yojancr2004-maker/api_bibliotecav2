import { Product } from "../models/product.model";

export const PRODUCT_CATEGORIES = [
  "Computadores",
  "Accesorios",
  "Monitores",
  "Periféricos",
  "Audio"
] as const;

export const products: Product[] = [
  {
    id: 1,
    name: "Laptop Lenovo",
    price: 2800000,
    category: "Computadores",
    stock: 10,
    active: true
  },
  {
    id: 2,
    name: "Mouse Logitech",
    price: 120000,
    category: "Accesorios",
    stock: 25,
    active: true
  },
  {
    id: 3,
    name: "Monitor LG",
    price: 950000,
    category: "Monitores",
    stock: 8,
    active: true
  },
  {
    id: 4,
    name: "Teclado Mecánico",
    price: 350000,
    category: "Periféricos",
    stock: 18,
    active: true
  },
  {
    id: 5,
    name: "Audífonos Bluetooth",
    price: 420000,
    category: "Audio",
    stock: 14,
    active: true
  }
];