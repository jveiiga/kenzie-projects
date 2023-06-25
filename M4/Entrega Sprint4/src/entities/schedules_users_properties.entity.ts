//Decorator
import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    ManyToOne 
} from "typeorm"
import Properties from "./properties.entity"
import { User } from "./user.entity"

@Entity("schedules_users_properties") 
    class Schedules_users_properties {

        @PrimaryGeneratedColumn("uuid")
        id: string

        @Column({ type: "date" })
        date: string
        
        @Column({ type: "time" })
        hour: string

        @ManyToOne(() => Properties, property => property.id)
        property: Properties

        @ManyToOne(() => User, user => user.id)
        user: User
    }

export { Schedules_users_properties }