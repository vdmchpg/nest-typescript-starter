import { Entity, Column, ObjectIdColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Cat {

    @PrimaryGeneratedColumn()
    @ObjectIdColumn()
    id: number;

    @Column({ length: 20 })
    name: string;

    @Column({ type: 'date' })
    birthDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;
}
