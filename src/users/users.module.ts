import { Module } from '@nestjs/common';
import { PrismaModule } from '@src/prisma/prisma.module';
import { PrismaService } from '@src/prisma/prisma/prisma.service';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
	imports: [PrismaModule],
	controllers: [UsersController],
	providers: [UsersService],
})
export class UsersModule { }
