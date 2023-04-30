import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { RepositoryBase } from 'src/common/base/reposiroty';
import { Size } from './entities/size.entity';

@Injectable()
export class SizeRepository extends RepositoryBase<Size> {
  constructor(@InjectRepository(Size) repository: Repository<Size>) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
}
