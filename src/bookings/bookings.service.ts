import { Injectable } from '@nestjs/common';
import { Bookings } from './bookings.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Bookings)
    private readonly bookingsRepo: Repository<Bookings>,
  ) {}

  getAll(): Promise<Bookings[]> {
    return this.bookingsRepo.find();
  }
}
