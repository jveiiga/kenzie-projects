//Decorator
import { 
    Entity, 
    PrimaryGeneratedColumn,
    Column, 
} from "typeorm"

@Entity("addresses")
    class Addresses {

        @PrimaryGeneratedColumn("uuid")
        id: string

        @Column()
        district: string

        @Column()
        zipCode: string

        @Column()
        number: number

        @Column()
        city: string

        @Column()
        state: string
    }

    export default Addresses