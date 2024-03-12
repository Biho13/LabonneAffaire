export class Article {
  constructor(
    public id: number,
    public imageUrl: string,
    public title: string,
    public prix: number,
    public description: string,
    public n_like: number,
    public createdDate: Date,
    public dispo: boolean
  ) {}
}
