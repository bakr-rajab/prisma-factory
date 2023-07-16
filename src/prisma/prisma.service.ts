import { Injectable, INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  //   constructor(private configService: ConfigService) {
  //     super({
  //       log: ['error'],
  //       datasources: {
  //         db: {
  //           url: configService.get('database.newURL'),
  //         },
  //       },
  //     });
  //   }

  async onModuleInit() {
    await this.$connect();
    console.log('prisma connected');
  }

  async enableShutdownHooks(app: INestApplication) {
    process.on('beforeExit', async () => {
      await app.close();
    });
  }
}
