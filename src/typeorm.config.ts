import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Size } from './modules/size/entities/size.entity';
import { Category } from './modules/category/entities/category.entity';
import { Product } from './modules/product/entities/product.entity';
import { Color } from './modules/color/entities/color.entity';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
  host: process.env.POSTGRES_HOST,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  synchronize: process.env.POSTGRES_SYNC === 'true',
  logging: process.env.POSTGRES_LOGGING === 'true',
  entities: [Size, Category, Product, Color],
};
