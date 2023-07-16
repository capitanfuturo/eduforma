import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingsService } from './bookings.service';
import { Module } from '@nestjs/common';
import { Bookings } from './bookings.entity';
import { BookingsController } from './bookings.controller';
import { Members } from './members.entity';
import { Facilities } from './facilities.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Facilities, Members, Bookings])],
  controllers: [BookingsController],
  providers: [BookingsService],
})
export class BookingsModule {}
