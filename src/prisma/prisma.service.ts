import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    // Initialize Prisma with a PostgreSQL adapter
    const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL },{
      schema: 'crudschema', // Explicitly define the target schema here
    })

    super({ adapter }); // ✅ Prisma v7 allows adapter option
  }

  async onModuleInit() {
    await this.$connect();
  }
}
