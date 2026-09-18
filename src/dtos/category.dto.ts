import { ProductCategory } from "../models/category.model";

export interface CreateCategoryDto {
  name: ProductCategory;
  description?: string;
  active: boolean;
}

export interface UpdateCategoryDto {
  name: ProductCategory;
  description?: string;
  active: boolean;
}
