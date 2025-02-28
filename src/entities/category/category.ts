export class Category {
  public id: string;
  public name: string;
  public createdAt: string;
  public updatedAt: string;
  public postId: string;

  constructor(data: Category.Server) {
    this.id = data.id;
    this.name = data.name;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.postId = data.postId;
  }
}

export namespace Category {
  export type Server = {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    postId: string;
  };
}
