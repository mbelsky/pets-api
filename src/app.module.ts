import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { ThreadsController } from './threads/threads.controller';
import { ThreadsModule } from './threads/threads.module';

@Module({
  imports: [CatsModule, ThreadsModule],
})
export class AppModule {}
