import { PrismaService } from './prisma/prisma.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { PostService } from './post/post.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, AppService, UserService, PostService],
})
export class AppModule {}
