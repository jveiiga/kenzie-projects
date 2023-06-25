import { MigrationInterface, QueryRunner } from "typeorm";

export class updateDeleteDateColumn1671549051807 implements MigrationInterface {
    name = 'updateDeleteDateColumn1671549051807'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedDate" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedDate"`);
    }

}
