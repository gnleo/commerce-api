/*
  Warnings:

  - You are about to alter the column `latitude` on the `store` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Decimal(65,30)`.
  - You are about to alter the column `longitude` on the `store` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE `store` MODIFY `latitude` DECIMAL(65, 30) NOT NULL,
    MODIFY `longitude` DECIMAL(65, 30) NOT NULL;
