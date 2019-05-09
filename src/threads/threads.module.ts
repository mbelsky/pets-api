import { Module } from '@nestjs/common';
import { ThreadsController } from './threads.controller';

@Module({
  controllers: [ThreadsController],
})
export class ThreadsModule {}
