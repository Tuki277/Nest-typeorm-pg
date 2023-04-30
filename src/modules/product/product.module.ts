import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductRepository } from './product.repository';
import { CategoryModule } from '../category/category.module';
import { ColorModule } from '../color/color.module';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), CategoryModule, ColorModule],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository],
})
export class ProductModule {}
