import { MigrationInterface, QueryRunner } from "typeorm";

export class createSchedulesUsersProperties1672250811904 implements MigrationInterface {
    name = 'createSchedulesUsersProperties1672250811904'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "schedules_users_properties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" date NOT NULL, "hour" TIME NOT NULL, "userId" uuid, CONSTRAINT "PK_751450246dee9abc82a47dabc4c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "REL_d668d60e6cbf1966636e32f4ef"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "adressId"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD CONSTRAINT "FK_6b07764ec82685efb66e5629845" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP CONSTRAINT "FK_6b07764ec82685efb66e5629845"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "adressId" integer`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "REL_d668d60e6cbf1966636e32f4ef" UNIQUE ("adressId")`);
        await queryRunner.query(`DROP TABLE "schedules_users_properties"`);
    }

}
