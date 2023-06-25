import { hashSync } from "bcryptjs"
//Decorator
import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn, 
  UpdateDateColumn, 
  DeleteDateColumn,
  OneToMany,
  BeforeUpdate,
  BeforeInsert 
  } from "typeorm"
import { Schedules_users_properties } from "./schedules_users_properties.entity"

@Entity("users")
class User {
  
  @PrimaryGeneratedColumn("uuid")
  id: string
  
  @Column()
  name: string

  @Column()
  email: string 

  @Column()
  password: string

  @Column()
  isAdm: boolean

  @Column({default: true})
  isActive: boolean

  @CreateDateColumn({nullable: true})
  createdAt: Date

  @UpdateDateColumn({nullable: true})
  updatedAt: Date

  @DeleteDateColumn({nullable: true})
  deletedDate: Date

  @OneToMany(() => Schedules_users_properties, schedules_users_properties => schedules_users_properties.id)
  schedules_users_properties: Schedules_users_properties[]

  // @OneToOne(() => Adress) @JoinColumn()
  // adress: Adress

  @BeforeUpdate()
  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10)
  }
}

export { User }
