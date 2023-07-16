import { Controller, Get } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { Bookings } from './bookings.entity';

@Controller('v1/bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Get()
  getHello(): Promise<Bookings[]> {
    return this.bookingsService.getAll();
  }
}
