import { categories } from "../data/categories.data";
import { Category, ProductCategory } from "../models/category.model";
import { CreateCategoryDto, UpdateCategoryDto } from "../dtos/category.dto";

export class CategoryRepository {
  findAll(): Category[] {
    return categories;
  }

  findById(id: number): Category | undefined {
    return categories.find(category => category.id === id);
  }

  findByName(name: string): Category[] {
    return categories.filter(category =>
      category.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  create(categoryDto: CreateCategoryDto): Category {
    const newCategory: Category = {
      id: categories.length + 1,
      ...categoryDto,
      name: categoryDto.name as ProductCategory
    };

    categories.push(newCategory);
    return newCategory;
  }

  update(id: number, categoryDto: UpdateCategoryDto): Category | undefined {
    const index = categories.findIndex(category => category.id === id);

    if (index !== -1) {
      const updatedCategory: Category = {
        ...categories[index],
        ...categoryDto,
        name: categoryDto.name as ProductCategory
      };

      categories[index] = updatedCategory;
      return categories[index];
    }

    return undefined;
  }

  delete(id: number): boolean {
    const index = categories.findIndex(category => category.id === id);

    if (index !== -1) {
      categories.splice(index, 1);
      return true;
    }

    return false;
  }
}
