import { Injectable } from '@nestjs/common';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';
import { ColorRepository } from './color.repository';

@Injectable()
export class ColorService {
  constructor(private colorRepository: ColorRepository) {}

  async create(createColorDto: CreateColorDto) {
    const data = await this.colorRepository.create(createColorDto);
    return await this.colorRepository.save(data);
  }

  async findAll() {
    return await this.colorRepository.find({});
  }

  async findOne(id: number) {
    return await this.colorRepository.findOne({ where: { id } });
  }

  async update(id: number, updateColorDto: UpdateColorDto) {
    return await this.colorRepository.update({ id }, updateColorDto);
  }

  async remove(id: number) {
    return await this.colorRepository.delete(id);
  }
}
