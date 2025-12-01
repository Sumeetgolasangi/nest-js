import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { UserService } from "./user.service";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
   controllers: [ UserController],
   imports:[PrismaModule],
   providers: [UserService,PrismaService]
})

export class UserModule{
}