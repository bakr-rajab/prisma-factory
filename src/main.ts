import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Lohanza API Doc')
    // .setBasePath("https://localhost:8077/api");
    // .setVerifyingSsl(false);
    .setDescription(
      'The official API documentation for the Lohanza API. This API is used to manage the Lohanza platform. Built with love by Team Lohanza ❤',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .addSecurityRequirements('bearer')
    .build();

  const PORT = process.env.PORT;
  console.log('444444', process.env.PORT);

  const document = SwaggerModule.createDocument(app, config, {});
  SwaggerModule.setup('api', app, document, {
    customSiteTitle: 'Lohanza API Docs',
    swaggerOptions: {
      tagsSorter: 'alpha',
      operationsSorter: 'method',
      docExpansion: 'none',
    },
  });
  await app.listen(PORT, () => {
    Logger.verbose(
      `swagger listen on http://localhost:${PORT}/api  `,
      'Swagger',
    );
  });
}
bootstrap();
