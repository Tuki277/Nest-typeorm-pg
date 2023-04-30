import { Product } from 'src/modules/product/entities/product.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Color {
  @PrimaryGeneratedColumn({ name: 'colorid' })
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Product, (p) => p.color)
  product: Product[];
}
