import { Category } from 'src/modules/category/entities/category.entity';
import { Color } from 'src/modules/color/entities/color.entity';
import { Size } from 'src/modules/size/entities/size.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn({ name: 'productid' })
  id: number;

  @Column('varchar', { name: 'name' })
  name: string;

  @Column('text', { name: 'description' })
  description: string;

  @ManyToMany(() => Category, (c) => c.product)
  @JoinTable()
  category: Category[];

  @ManyToMany(() => Color, (c) => c.product)
  @JoinTable()
  color: Color[];

  @ManyToOne(() => Size, (s) => s.product)
  size: Size;
}
