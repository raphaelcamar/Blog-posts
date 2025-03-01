import { Category } from '@/entities';

export interface CategoryProtocol {
  getCategories: () => Promise<Category[]>;
}
