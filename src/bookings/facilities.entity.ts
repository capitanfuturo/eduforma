import { Bookings } from 'src/bookings/bookings.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'facilities' })
export class Facilities extends BaseEntity {
  @PrimaryGeneratedColumn()
  facid: number;

  @Column('varchar', { length: 100 })
  name: string;

  @Column('int', { nullable: false })
  membercost: number;

  @Column('int', { nullable: false })
  guestcost: number;

  @Column('int', { nullable: false })
  initialoutlay: number;

  @Column('int', { nullable: false })
  monthlymaintenance: number;

  @OneToMany((type) => Bookings, (bookings) => bookings.facid)
  bookings: Bookings[];
}
