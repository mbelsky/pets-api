export class CatDto {
  readonly id: number;
  readonly name: string;
}

export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly gender: string;
}
