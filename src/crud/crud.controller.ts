import { Body, Controller, Delete, Get, Post, Put, Param, ParseIntPipe } from '@nestjs/common';
import { CrudService } from './crud.service';
import { Prisma } from '@prisma/client';

@Controller('crud')
export class CrudController {
  constructor(private crudService: CrudService) {}

  @Get()
  getAllData() {
    return this.crudService.getAllData();
  }

  @Post()
  createData(@Body() body: Prisma.CrudCreateInput) {
    return this.crudService.createData(body);
  }

  @Put(":id")
  updateData(@Param("id" , ParseIntPipe) id:number, @Body() body: Prisma.CrudUpdateInput) {
    return this.crudService.updateData(id, body);
  }

  @Delete(":id")
  deleteData(@Param("id" , ParseIntPipe) id:number) {
    return this.crudService.deleteData(id);
  }

  @Get(":id")
  getData(@Param("id" , ParseIntPipe) id:number) {
    return this.crudService.getData(id);
  }
} 
