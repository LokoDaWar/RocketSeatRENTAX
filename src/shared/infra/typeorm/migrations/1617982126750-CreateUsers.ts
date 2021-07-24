import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1617982126750 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",

        columns: [
          {
            name: "id",
            type: "uuid",
          },

          {
            name: "name",
            type: "varchar",
          },

          {
            name: "username",
            type: "varchar",
            isUnique: true,
          },

          {
            name: "password",
            type: "varchar",
          },

          {
            name: "email",
            type: "varchar",
            isUnique: true,
          },

          {
            name: "typeDocument",
            type: "varchar",
          },

          {
            name: "document",
            type: "varchar",
            isUnique: true,
          },


          {
            name: "driver_license",
            type: "varchar",
          },

          {
            name: "cellPhone",
            type: "varchar",
          },

          {
            name: "country",
            type: "varchar",
          },

          {
            name: "isAdmin",
            type: "boolean",
            default: false,
          },

          {
            name: "permissions",
            type: "varchar",
            isNullable: true
          },

          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },

          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
