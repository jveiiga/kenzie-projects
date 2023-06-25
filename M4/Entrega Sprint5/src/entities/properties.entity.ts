import { scheduler } from "timers/promises";
import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    OneToOne,
    ManyToOne,
    JoinColumn,
    OneToMany
} from "typeorm";
import Addresses from "./addresses.entity.";
import Categories from "./categories.entity";
import { Schedules_users_properties } from "./schedules_users_properties.entity";

@Entity("properties")
    class Properties {

        @PrimaryGeneratedColumn("uuid")
        id: string

        @Column({ nullable: true, default: false })
        sold: boolean

        @Column({ type: "float" })
        value: number

        @Column()
        size: number

        @CreateDateColumn()
        createdAt: Date

        @UpdateDateColumn()
        updatedAt: Date

        @OneToMany(() => Schedules_users_properties, schedule => schedule.property)
        schedules: Schedules_users_properties[]

        @OneToOne(() => Addresses) 
        @JoinColumn()
        address: Addresses

        @ManyToOne(() => Categories)
        category: Categories
    }

    export default Properties