import { Injectable } from '@nestjs/common';
import { CatDto, CreateCatDto } from './cats.dto';

@Injectable()
export class CatsService {
  private readonly cats: CatDto[] = [
    { id: 0, threadId: 100, name: 'Ashe', gender: 'female', age: 8 },
    { id: 1, threadId: 101, name: 'Vayne', gender: 'female', age: 6 },
    { id: 2, threadId: 102, name: 'Kayle', gender: 'female', age: 1 },
    { id: 3, threadId: 103, name: 'Kayn', gender: 'male', age: 7 },
    { id: 4, threadId: 104, name: 'Garen', gender: 'male', age: 3 },
  ];

  private readonly catPhotoUrls: { [key: string]: string } = {
    0: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/June_odd-eyed-cat_cropped.jpg/600px-June_odd-eyed-cat_cropped.jpg',
    1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Black_bicolore_Maine_Coon_with_Odd_Eyed.jpg/440px-Black_bicolore_Maine_Coon_with_Odd_Eyed.jpg',
    3: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Odd_Eyed_Black_Cat.jpg',
    4: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Odd-eyed-domestic-cat.jpg/440px-Odd-eyed-domestic-cat.jpg',
  };

  create(cat: CreateCatDto) {
    // TODO:
  }

  findAll(): CatDto[] {
    return this.cats;
  }

  findOne(id: number): void | CatDto {
    return this.cats.find(cat => cat.id === id);
  }

  findPhoto(id: string): void | string {
    return this.catPhotoUrls[id];
  }
}
