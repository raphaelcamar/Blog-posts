import { faker } from '@faker-js/faker';
import { Author } from './author';

export class AuthorMock {
  static get(): Author {
    return {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      profilePicture: faker.image.avatar(),
      createdAt: faker.date.past().toString(),
      updatedAt: faker.date.recent().toString(),
    };
  }

  static getArray(size: number): Author[] {
    return Array(size)
      .fill(null)
      .map(() => ({ ...this.get() }));
  }
}
