import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustController } from './cust.controller';
import { CustEntity } from './cust.entity';
import { CustService } from './cust.service';

@Module({
  imports: [TypeOrmModule.forFeature([CustEntity])],
  controllers: [CustController],
  providers: [CustService],
})
export class CustModule {}
