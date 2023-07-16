import { Bookings } from 'src/bookings/bookings.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'members' })
export class Members extends BaseEntity {
  @PrimaryGeneratedColumn()
  memid: number;

  @Column('varchar', { length: 200 })
  surname: string;

  @Column('varchar', { length: 200 })
  firstname: string;

  @Column('varchar', { length: 300 })
  address: string;

  @Column('int', { nullable: false })
  zipcode: number;

  @Column('varchar', { length: 20 })
  telephone: string;

  @Column('int', { nullable: true })
  recommendedby: number;

  @Column('timestamp', { nullable: false })
  joindate: Date;

  @OneToMany((type) => Bookings, (bookings) => bookings.memid)
  bookings: Bookings[];
}
