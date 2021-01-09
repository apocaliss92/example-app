import { ApiProperty } from '@nestjs/swagger';

export class DeletedTodo {
  @ApiProperty()
  id: string;

  @ApiProperty()
  deleted: boolean;
}
