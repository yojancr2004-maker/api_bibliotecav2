import { CategoryRepository } from "../repositories/category.repository";
import { CreateCategoryDto, UpdateCategoryDto } from "../dtos/category.dto";
import { AppError } from "../errors/app-error";

export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async getAll() {
    return this.categoryRepository.findAll();
  }

  async getById(id: number) {
    const category = this.categoryRepository.findById(id);

    if (!category) {
      throw new AppError(404, "Categoría no encontrada");
    }

    return category;
  }

  async create(data: CreateCategoryDto) {
    const existing = this.categoryRepository.findByName(data.name);

    if (existing.length > 0) {
      throw new AppError(409, "Ya existe una categoría con ese nombre");
    }

    return this.categoryRepository.create(data);
  }

  async update(id: number, data: UpdateCategoryDto) {
    const category = this.categoryRepository.findById(id);

    if (!category) {
      throw new AppError(404, "Categoría no encontrada");
    }

    const existing = this.categoryRepository.findByName(data.name);

    if (existing.some(candidate => candidate.id !== id)) {
      throw new AppError(409, "Ya existe otra categoría con ese nombre");
    }

    return this.categoryRepository.update(id, data);
  }

  async delete(id: number) {
    const category = this.categoryRepository.findById(id);

    if (!category) {
      throw new AppError(404, "Categoría no encontrada");
    }

    this.categoryRepository.delete(id);
  }
}
