import { Author } from '@/entities';

export interface AuthorProtocol {
  getAuthors: () => Promise<Author[]>;
}
