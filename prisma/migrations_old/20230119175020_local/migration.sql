-- AlterTable
ALTER TABLE `posts` MODIFY `authorId` VARCHAR(191) NULL;

-- RedefineIndex
CREATE INDEX `answers_question_id_idx` ON `answers`(`question_id`);
DROP INDEX `Answers_question_id_idx` ON `answers`;
