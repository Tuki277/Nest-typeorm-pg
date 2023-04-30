import { Product } from 'src/modules/product/entities/product.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn({ name: 'categoryid' })
  id: number;

  @Column('varchar', { nullable: true })
  name: string;

  @ManyToMany(() => Product, (p) => p.category)
  product: Product[];
}
