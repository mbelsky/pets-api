import { Matches, Max, Min, MinLength } from 'class-validator';

export class CatDto {
  readonly id: number;
  readonly threadId: number;
  readonly name: string;
  readonly gender: string;
}

export class CreateCatDto {
  @MinLength(2, { message: 'Name is too short' })
  readonly name: string;

  @Min(0, { message: 'Age should be >= 0' })
  @Max(40, { message: 'That cat is too old to be alive' })
  readonly age: number;

  @Matches(/^(male|female)$/, { message: 'Allowed gender values: "male", "female"' })
  readonly gender: string;
}
