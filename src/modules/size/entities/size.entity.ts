import { Product } from 'src/modules/product/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Size {
  @PrimaryGeneratedColumn({ name: 'sizeid' })
  id: number;

  @Column('varchar', { nullable: true })
  name: string;

  @OneToMany(() => Product, (p) => p.size)
  product: Product[];
}
