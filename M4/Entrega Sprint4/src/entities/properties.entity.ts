//Decorator
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

        @OneToMany(() => Properties, property => property.id)
        property: Properties

        @OneToOne(() => Addresses) @JoinColumn()
        address: Addresses

        @ManyToOne(() => Categories, category => category.id)
        category: Categories
    }

    export default Properties