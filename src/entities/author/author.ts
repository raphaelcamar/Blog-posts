export class Author {
  public id: string;
  public name: string;
  public profilePicture: string;
  public createdAt: string;
  public updatedAt: string;

  constructor(data: Author.Server) {
    this.id = data.id;
    this.name = data.name;
    this.profilePicture = data.profilePicture;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
}

export namespace Author {
  export type Server = {
    id: string;
    name: string;
    profilePicture: string;
    createdAt: string;
    updatedAt: string;
  };
}