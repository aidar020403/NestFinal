import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CustEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hotel: string;
}
