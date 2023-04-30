import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';
import { SizeRepository } from './size.repository';

@Injectable()
export class SizeService {
  constructor(private sizeRepository: SizeRepository) {}

  async create(createSizeDto: CreateSizeDto) {
    const data = await this.sizeRepository.create(createSizeDto);
    return await this.sizeRepository.save(data);
  }

  async findAll() {
    return await this.sizeRepository.find({});
  }

  async findOne(id: number) {
    return await this.sizeRepository.findOne({ where: { id } });
  }

  async update(id: number, updateSizeDto: UpdateSizeDto) {
    const data = await this.sizeRepository.findOne({ where: { id } });
    if (data) {
      return await this.sizeRepository.update({ id }, updateSizeDto);
    }
    throw new NotFoundException('Size not found');
  }

  async remove(id: number) {
    const data = await this.sizeRepository.findOne({ where: { id } });
    if (data) {
      return await this.sizeRepository.delete(id);
    }
    throw new NotFoundException('Size not found');
  }
}
