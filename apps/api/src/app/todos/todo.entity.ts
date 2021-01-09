import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('todos')
export class TodoEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @ApiProperty()
  @Column({ length: 255, name: 'Title' })
  title: string;

  @ApiProperty()
  @Column({ length: 255, name: 'Description' })
  description: string;

  @ApiProperty()
  @Column({ default: false, name: 'Done' })
  done: boolean;
}
