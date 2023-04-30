import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { RepositoryBase } from 'src/common/base/reposiroty';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryRepository extends RepositoryBase<Category> {
  constructor(@InjectRepository(Category) repository: Repository<Category>) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
}
