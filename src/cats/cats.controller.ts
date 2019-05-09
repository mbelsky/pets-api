import {
  Body,
  Controller,
  Get,
  Headers,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  ValidationPipe,
} from '@nestjs/common';

import { CatDto, CreateCatDto } from './cats.dto';
import { CatsService } from './cats.service';

interface PayloadFailure {
  error: string;
}
interface PayloadSuccess<T> {
  payload: T;
}

type Payload<T> = PayloadSuccess<T> | PayloadFailure;

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll(): CatDto[] {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Payload<CatDto> {
    const cat = this.catsService.findOne(id);
    return cat ? { payload: cat } : { error: `Cat with id=${id} not found` };
  }

  @Get('photo/:id')
  findPhoto(
    @Headers('x-api-key') apiKey,
    @Param('id') id: string,
  ): Payload<string> {
    if (apiKey !== 'vzuh') {
      throw new HttpException('Wrong api key', HttpStatus.UNAUTHORIZED);
    }

    const photo = this.catsService.findPhoto(id);
    return photo
      ? { payload: photo }
      : { error: `Cat's photo by id=${id} not found` };
  }

  @Post()
  create(
    @Body(new ValidationPipe({ transform: true })) body: CreateCatDto, // useGlobalPipes
  ): Payload<string> {
    if (body.gender !== 'female') {
      throw new HttpException(
        `Временное ограничение на добавление питомцев "${
          body.gender
        }" пола. Попробуйте повторить попытку в следующем году.`,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }

    // this.catsService.create(body);

    return {
      payload:
        'Спасибо за добавление нового котика в базу. Он будет отображен в общем списке после одобрения администратором.',
    };
  }
}
