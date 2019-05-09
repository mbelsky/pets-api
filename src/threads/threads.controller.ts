import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

import { Payload } from '../types';

import { ThreadDto } from './threads.dto';

@Controller('threads')
export class ThreadsController {
  private readonly threads: { [key: string]: ThreadDto } = {
    100: {
      comments: [
        {
          id: 0,
          author: 'Mr. Smith',
          content: '<b>Я твой вёрстка</b><br><h1>LOMAL</h1>',
        },
        {
          id: 2,
          author: 'Крокодил',
          content: 'мимо',
        },
      ],
    },
    101: {
      comments: [
        {
          id: 3,
          author: 'Помиловать',
          content: 'Казнить нельзя',
        },
      ],
    },
    103: {
      comments: [],
    },
    104: {
      comments: [
        {
          id: 7,
          author: 'Жмурик',
          content: 'Этот лев мне по душе',
        },
        {
          id: 8,
          author: 'Африканец',
          content: 'Да вы где таких львов видели…',
        },
      ],
    },
  };

  @Get('/:id')
  findOne(@Param('id', ParseIntPipe) id: number): Payload<ThreadDto> {
    const thread = this.threads[id];
    return thread
      ? { payload: thread }
      : { error: `There is no thread with id=${id}` };
  }
}
