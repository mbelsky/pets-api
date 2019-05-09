import { Injectable } from '@nestjs/common';
import { CatDto, CreateCatDto } from './cats.dto';

@Injectable()
export class CatsService {
  private readonly cats: CatDto[] = [
    { id: 0, name: 'Ashe' },
    { id: 1, name: 'Vayne' },
    { id: 3, name: 'Taliya' },
    { id: 4, name: 'Seju' },
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
