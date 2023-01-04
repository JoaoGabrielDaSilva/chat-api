import { IsNotEmpty, IsString, IsArray } from 'class-validator';

export class CreatePostBody {
  @IsNotEmpty()
  @IsString()
  content: string;

  images: string[];

  @IsNotEmpty()
  @IsString()
  authorId: string;
}
