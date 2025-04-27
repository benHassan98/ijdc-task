import { ApiProperty } from "@nestjs/swagger";

export class Task {
  @ApiProperty({
    type: String,
    description: " id of the task"
  })
  id: string;
  @ApiProperty({
    type: String,
    description: " description of the task"
  })
  desc: string;
};
