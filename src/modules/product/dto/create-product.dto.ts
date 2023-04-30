import { IsArray, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { Category } from 'src/modules/category/entities/category.entity';
import { Color } from 'src/modules/color/entities/color.entity';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsArray()
  category: Category[];

  @IsNotEmpty()
  @IsArray()
  color: Color[];
}
