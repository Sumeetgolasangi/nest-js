import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()


export class CrudService{
   constructor(private readonly prisma: PrismaService){}
   getAllData(){
      return this.prisma.crud.findMany()
   }

   createData(body: Prisma.CrudCreateInput) {
      return this.prisma.crud.create({
         data: body
      });
   }

   updateData(id: number, body: Prisma.CrudUpdateInput) {
      return this.prisma.crud.update({
         where: {
            id:id
         },
         data: {
            ...body
         }
      });
   }

   deleteData(id: number) {
      return this.prisma.crud.delete({
         where:{
            id:id
         }
      });
   }

   getData(id: number) {
      return this.prisma.crud.findUnique({
         where:{
            id:id,
         }
      });
   }
}