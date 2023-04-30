import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const data = await this.categoryRepository.create(createCategoryDto);
    return await this.categoryRepository.save(data);
  }

  async findAll() {
    return await this.categoryRepository.find({});
  }

  async findOne(id: number) {
    return await this.categoryRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const data = await this.categoryRepository.findOne({ where: { id } });
    if (data) {
      return await this.categoryRepository.update({ id }, updateCategoryDto);
    }
    throw new NotFoundException('Category not found');
  }

  async remove(id: number) {
    const data = await this.categoryRepository.findOne({ where: { id } });
    if (data) {
      return await this.categoryRepository.delete(id);
    }
    throw new NotFoundException('Category not found');
  }
}
