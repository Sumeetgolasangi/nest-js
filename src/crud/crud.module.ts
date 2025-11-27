import { Module } from "@nestjs/common";
import { CrudController } from "./crud.controller";
import { CrudService } from "./crud.service";
import { PrismaModule } from "src/prisma/prisma.module";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
   controllers: [ CrudController],
   imports:[PrismaModule],
   providers: [CrudService,PrismaService]
})
export class CrudModule{
}