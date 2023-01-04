import { IsNotEmpty, IsString, IsArray } from 'class-validator';

export class EditPostBody {
  @IsNotEmpty()
  @IsString()
  content: string;

  images: string[];
}
