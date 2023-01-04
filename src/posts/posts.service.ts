import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostBody } from './dto/create-post.dto';
import { EditPostBody } from './dto/edit-post.dto';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  create(body: CreatePostBody) {
    const { content, authorId } = body;

    return this.prisma.post.create({
      data: {
        content,
        authorId,
        ...(body?.images
          ? {
              images: {
                create: body.images.map((image) => ({ image })),
              },
            }
          : {}),
      },
      include: {
        images: true,
      },
    });
  }

  findAll() {
    return `This action returns all posts`;
  }

  findOne(id: string) {
    return `This action returns a #${id} post`;
  }

  update(id: string, body: EditPostBody) {
    return `This action updates a #${id} post`;
  }

  remove(id: string) {
    return `This action removes a #${id} post`;
  }
}
