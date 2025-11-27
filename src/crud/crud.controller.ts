import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('crud')
export class CrudController {
  constructor(private prisma: PrismaService) {}

  @Get()
  findAll() {
    return this.prisma.crud.findMany();
  }
} 
