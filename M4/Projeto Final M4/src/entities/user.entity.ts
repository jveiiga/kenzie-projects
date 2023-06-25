import { hashSync } from 'bcryptjs';
import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Comment } from './comment.entity';
import { Post } from './post.entity';
import { Product } from './products.entities';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    image: string;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    contact: string;

    @Column()
    register: string;

    @Column()
    isStore: boolean;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn({ nullable: true })
    deletedAt: Date;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = hashSync(this.password, 10);
    }

    @OneToMany(() => Product, (product) => product.user, { nullable: true })
    products: Product[];

    @OneToMany(() => Post, (posts) => posts.user)
    posts: Post;

    @OneToMany(() => Comment, (comments) => comments.user)
    comments: Comment;
}

export { User };
