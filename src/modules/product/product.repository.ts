import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { RepositoryBase } from 'src/common/base/reposiroty';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductRepository extends RepositoryBase<Product> {
  constructor(@InjectRepository(Product) repository: Repository<Product>) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
}
