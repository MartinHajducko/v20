-- AlterTable
ALTER TABLE `users` ADD COLUMN `role` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER';

-- CreateIndex
CREATE INDEX `accounts_userId_idx` ON `accounts`(`userId`);

-- CreateIndex
CREATE INDEX `posts_authorId_idx` ON `posts`(`authorId`);

-- CreateIndex
CREATE INDEX `sessions_userId_idx` ON `sessions`(`userId`);
