import { MigrationInterface, QueryRunner } from "typeorm";

export class createUser1671468029845 implements MigrationInterface {
    name = 'createUser1671468029845'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "adress" ("id" SERIAL NOT NULL, "street" character varying(50) NOT NULL, "number" character varying(5) NOT NULL, "zip_code" character varying(8) NOT NULL, "city" character varying(50) NOT NULL, "state" character varying(2) NOT NULL, "information" character varying(50), CONSTRAINT "PK_f108093ea9cd9f59d72c2f1a057" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "isAdm" boolean NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), "adressId" integer, CONSTRAINT "REL_d668d60e6cbf1966636e32f4ef" UNIQUE ("adressId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_d668d60e6cbf1966636e32f4ef8" FOREIGN KEY ("adressId") REFERENCES "adress"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_d668d60e6cbf1966636e32f4ef8"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "adress"`);
    }

}
