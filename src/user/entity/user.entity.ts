import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeInsert,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column({ type: 'varchar', nullable: false, unique: true })
  account_name: string;
  @Column({ type: 'varchar', nullable: false, unique: true })
  real_name: string;
  @Column({ type: 'varchar', nullable: false }) password: string;
  @Column({ type: 'varchar', nullable: false }) password_salt: string;
  @Column({ type: 'varchar', nullable: false }) email: string;
  @Column({ type: 'varchar', nullable: false }) mobile: string;
  @Column({ type: 'varchar', nullable: false }) role: string;
  @Column({ type: 'varchar', nullable: false }) status: string;
  @Column({ type: 'varchar', nullable: false }) create_by: string;
  @Column({ type: 'varchar', nullable: false }) update_by: string;
  @CreateDateColumn() createdAt?: Date;
  @CreateDateColumn() updatedAt?: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
