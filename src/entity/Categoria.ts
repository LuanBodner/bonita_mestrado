import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Categoria{

    @PrimaryGeneratedColumn()
    idCategoria?: number;

    @Column( {nullable: true})
    @Index({ unique: true })
    descricao?: string;
}