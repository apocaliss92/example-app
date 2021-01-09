import { ApiProperty } from '@nestjs/swagger';

export class UpsertTodo {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;
}
