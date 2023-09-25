import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsString({ message: 'O nome deve ser uma string' })
  @IsNotEmpty()
  nome: string;

  @ApiProperty()
  @IsString({ message: 'O sobrenome deve ser uma string' })
  @IsNotEmpty()
  sobrenome: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail({}, { message: 'O email deve ser um email válido' })
  email: string;

  @ApiProperty()
  senha: string;

  @ApiProperty()
  @IsNumber({}, { message: 'O telefone deve conter apenas números' })
  @IsNotEmpty()
  telefone: number;
}
