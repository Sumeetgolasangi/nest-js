import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudModule } from './crud/crud.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    CrudModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
