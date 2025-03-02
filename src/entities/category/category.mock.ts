import { faker } from '@faker-js/faker';
import { Category } from './category';

export class CategoryMock {
  static get(): Category {
    return {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.past().toString(),
      updatedAt: faker.date.recent().toString(),
      postId: faker.string.uuid(),
    };
  }

  static getArray(size: number): Category[] {
    return Array(size)
      .fill(null)
      .map(() => ({ ...this.get() }));
  }
}
