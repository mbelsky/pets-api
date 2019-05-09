import { Injectable } from '@nestjs/common';
import { CatDto, CreateCatDto } from './cats.dto';

@Injectable()
export class CatsService {
  private readonly cats: CatDto[] = [
    { id: 0, threadId: 100, name: 'Ashe', gender: 'female' },
    { id: 1, threadId: 101, name: 'Vayne', gender: 'female' },
    { id: 3, threadId: 103, name: 'Kayn', gender: 'male' },
    { id: 4, threadId: 104, name: 'Garen', gender: 'male' },
  ];

  create(cat: CreateCatDto) {
    // TODO:
  }

  findAll(): CatDto[] {
    return this.cats;
  }

  findOne(id: number): void | CatDto {
    return this.cats.find(cat => cat.id === id);
  }
}
