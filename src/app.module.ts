import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Facilities } from './bookings/facilities.entity';
import { Members } from './bookings/members.entity';
import { Bookings } from './bookings/bookings.entity';
import { BookingsModule } from './bookings/bookings.module';
require('dotenv').config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: +process.env.PORT,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      schema: process.env.SCHEMA,
      entities: [Bookings, Facilities, Members],
    }),
    BookingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
