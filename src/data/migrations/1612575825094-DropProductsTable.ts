import {MigrationInterface, QueryRunner} from "typeorm";

export class DropProductsTable1612575825094 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('cashiers');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
