import { Author } from '../author/author';
import { Category } from '../category/category';

export class Post {
  public id: string;
  public title: string;
  public content: string;
  public thumbnail_url: string;
  public authorId: string;
  public createdAt: string;
  public updatedAt: string;
  public categories: Category[];
  public author: Author;

  constructor(data: Post.Server) {
    this.id = data.id;
    this.title = data.title;
    this.content = data.content;
    this.thumbnail_url = data.thumbnail_url;
    this.authorId = data.authorId;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.author = new Author(data.author);
    this.categories = data.categories.map(category => new Category(category));
  }
}

export namespace Post {
  export type Server = {
    id: string;
    title: string;
    content: string;
    thumbnail_url: string;
    authorId: string;
    createdAt: string;
    updatedAt: string;
    categories: Category[];
    author: Author;
  };
}
