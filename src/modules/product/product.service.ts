import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './product.repository';
import { Product } from './entities/product.entity';
import { CategoryRepository } from '../category/category.repository';
import { In } from 'typeorm';
import { ColorRepository } from '../color/color.repository';

@Injectable()
export class ProductService {
  constructor(
    private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository,
    private colorRepository: ColorRepository,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const p = new Product();
    const category = await this.categoryRepository.findBy({
      id: In(createProductDto.category),
    });
    const color = await this.colorRepository.findBy({
      id: In(createProductDto.color),
    });
    if (category) {
      console.log(category);
      p.name = createProductDto.name;
      p.description = createProductDto.description;
      p.category = category;
      p.color = color;
      return await this.productRepository.save(p);
    } else {
      throw new NotFoundException('Category not found');
    }
  }

  async findAll() {
    return await this.productRepository.find({
      relations: ['category', 'color'],
    });
  }

  async findOne(id: number) {
    return await this.productRepository.findOne({
      relations: ['category', 'color'],
      where: { id },
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: number) {
    return await this.productRepository.delete(id);
  }
}