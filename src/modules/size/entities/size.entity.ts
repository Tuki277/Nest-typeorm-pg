import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Size {
  @PrimaryGeneratedColumn({ name: 'sizeid' })
  id: number;

  @Column('varchar', { nullable: true })
  name: string;
}
