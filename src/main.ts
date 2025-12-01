import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      exceptionFactory: (errors) => {
        // Extract only constraint messages
        const messages = errors
          .map(err => Object.values(err.constraints ?? {}))
          .flat();

        // If you want to return only the FIRST error:
        return new BadRequestException(messages[0]);
      },
    })
  ); 
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
