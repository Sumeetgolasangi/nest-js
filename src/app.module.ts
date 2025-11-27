import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudModule } from './crud/crud.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CrudModule,
    ConfigModule.forRoot({
      isGlobal: true,
    })

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
