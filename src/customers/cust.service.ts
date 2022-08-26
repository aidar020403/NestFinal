import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CustEntity } from './cust.entity';
import { CreateCustDto } from 'src/auth/dto/createCust.dto';

@Injectable()
export class CustService {
  constructor(
    @InjectRepository(CustEntity)
    private custRepository: Repository<CustEntity>,
  ) {}

  async getAll(): Promise<CustEntity[]> {
    return this.custRepository.find();
  }

  async getById(id: number): Promise<CustEntity> {
    return this.custRepository.findOneBy({ id });
  }

  async create(custDto: CreateCustDto): Promise<CustEntity> {
    const newCust = this.custRepository.save(custDto);
    return newCust;
  }
}
