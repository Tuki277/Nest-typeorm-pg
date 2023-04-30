import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { RepositoryBase } from 'src/common/base/reposiroty';
import { Color } from './entities/color.entity';

@Injectable()
export class ColorRepository extends RepositoryBase<Color> {
  constructor(@InjectRepository(Color) repository: Repository<Color>) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
}
