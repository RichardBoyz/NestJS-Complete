import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Group {
  @ObjectIdColumn()
  _id: string;

  @Column()
  name: string;

  @Column()
  description: string;
}
