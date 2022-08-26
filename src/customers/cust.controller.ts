import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCustDto } from 'src/auth/dto/createCust.dto';
import { CustEntity } from './cust.entity';
import { CustService } from './cust.service';

@Controller('cust')
export class CustController {
  constructor(private readonly custService: CustService) {}
  @Get()
  getAll(): Promise<CustEntity[]> {
    return this.custService.getAll();
  }

  @Get('hotel')
  getOne(@Param('hotel') hotel: number): Promise<CustEntity> {
    return this.custService.getById(hotel);
  }

  @Post()
  create(@Body() createCustDto: CreateCustDto): Promise<CustEntity> {
    return this.custService.create(createCustDto);
  }
}
