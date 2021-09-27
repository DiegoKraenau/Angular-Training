export class Movie {
  id: number;
  title: string;

  constructor(title?: string) {
    this.title = title || '';
  }
}
