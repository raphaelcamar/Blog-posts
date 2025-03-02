import { faker } from '@faker-js/faker';
import { Post } from './post';
import { AuthorMock } from '../author/author.mock';
import { CategoryMock } from '../category/category.mock';

export class PostMock {
  static get(): Post {
    return {
      id: faker.string.uuid(),
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraphs(3),
      thumbnail_url: faker.image.urlPicsumPhotos(),
      authorId: faker.string.uuid(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
      author: AuthorMock.get(),
      categories: CategoryMock.getArray(2),
    };
  }

  static getArray(size: number): Post[] {
    return Array(size)
      .fill(null)
      .map(() => ({ ...this.get() }));
  }
}
