import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Facilities } from './facilities.entity';
import { Members } from './members.entity';

@Entity({ name: 'bookings' })
export class Bookings extends BaseEntity {
  @PrimaryGeneratedColumn()
  bookid: number;

  @ManyToOne(() => Members, (member) => member.memid, {
    nullable: false,
    eager: false,
  })
  @JoinColumn({ name: 'memid' })
  memid: Members;

  @ManyToOne(() => Facilities, (facility) => facility.facid, {
    nullable: false,
    eager: false,
  })
  @JoinColumn({ name: 'facid' })
  facid: Facilities;

  @Column('timestamp', { nullable: false })
  starttime: Date;

  @Column('int', { nullable: true })
  slots: number;
}
