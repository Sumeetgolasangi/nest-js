import { Body, Controller, Get, ParseIntPipe, Post, Query } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserCreateDto } from "./dto/user-create.dto";
import { Param } from '@nestjs/common';
import { Prisma } from "@prisma/client";

@Controller("user")

export class UserController{
   constructor(private readonly userService: UserService){}

   
   @Get()
   async users(
      @Query("skip") skip?: string,
      @Query("take") take?: string,
      @Query("name") name?: string,
      @Query("email") email?: string,
      @Query("sortBy") sortBy?: string,
      @Query("order") order?: "asc" | "desc"
   ) {
      const data = this.userService.users({
         skip: skip ? Number(skip) : undefined,
         take: take ? Number(take) : undefined,

         where: {
         name: name ? { contains: name, mode: "insensitive" } : undefined,
         email: email ? { contains: email, mode: "insensitive" } : undefined,
         },

         orderBy: sortBy
         ? {
               [sortBy]: order ?? "asc",
            }
         : undefined,
      });
   }

   @Post()
   async createUser(@Body() body: UserCreateDto) {
      return this.userService.createUser(body);
   }

   @Get(":id")
   async user(@Param("id" , ParseIntPipe) id:number){
      return this.userService.user({id})
   }

}
