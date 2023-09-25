import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from '@nestjs/class-validator';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString({ message: 'O nome deve ser uma string' })
  @IsNotEmpty()
  nome: string;

  @Column()
  @IsString({ message: 'O sobrenome deve ser uma string' })
  @IsNotEmpty()
  sobrenome: string;

  @Column()
  @IsEmail({}, { message: 'O email deve ser um email válido' })
  @IsNotEmpty()
  email: string;

  @Column()
  @IsString({ message: 'A senha deve ser uma string' })
  @IsNotEmpty()
  senha: string;

  @Column({ type: 'bigint' })
  @IsNumber({}, { message: 'O telefone deve conter apenas números' })
  @IsNotEmpty()
  telefone: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt: Date;
}
