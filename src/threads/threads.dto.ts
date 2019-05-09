class Comment {
  readonly id: number;
  readonly author: string;
  readonly content: string;
}
export class ThreadDto {
  readonly comments: Comment[];
}
