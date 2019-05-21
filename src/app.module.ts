import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { ThreadsModule } from './threads/threads.module';

@Module({
  imports: [CatsModule, ThreadsModule],
})
export class AppModule {}
