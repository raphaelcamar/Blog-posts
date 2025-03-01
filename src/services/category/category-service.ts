import { Category } from '@/entities';
import { BaseServicesInstace } from '../base';
import { CategoryProtocol } from './protocol';

export class CategoryService extends BaseServicesInstace implements CategoryProtocol {
  constructor() {
    super(process.env.BASE_URL);
  }

  async getCategories(): Promise<Category[]> {
    const { data } = await this._instance.get<Category.Server[]>('/categories');

    const adapteeCategories = data.map(category => new Category(category));

    return adapteeCategories;
  }
}
