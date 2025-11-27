import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()


export class CrudService{
   constructor(private readonly prisma: PrismaService){}
   getAllRequest(){
      return this.prisma.crud.findMany()
   }
}