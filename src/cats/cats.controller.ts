import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { CreateCatDto } from './cats.dto'

interface PayloadFailure {
  error: string;
}
interface PayloadSuccess<T> {
  payload: T;
}

type Payload<T> = PayloadSuccess<T> | PayloadFailure;

interface Cat {
  id: number;
  name: string;
}

const CATS: Cat[] = [
  { id: 0, name: 'Ashe' },
  { id: 1, name: 'Vayne' },
  { id: 3, name: 'Taliya' },
  { id: 4, name: 'Seju' },
];

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'All cats here';
  }

  @Get(':id')
  findOne(@Param() params): Payload<Cat> {
    const cat = CATS.find(({ id }) => id === Number(params.id))
    return cat ? { payload: cat } : { error: `Cat with id=${params.id} not found` }
  }

  @Post()
  create(@Body() body: CreateCatDto) {
    return 'Спасибо за добавление нового котика в базу. Он будет отображен в общем списке после одобрения администратором.'
  }
}
