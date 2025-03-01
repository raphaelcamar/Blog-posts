import { BaseServicesInstace } from '../base';
import { Author } from '@/entities';
import { AuthorProtocol } from './protocol';

export class AuthorService extends BaseServicesInstace implements AuthorProtocol {
  constructor() {
    super(process.env.BASE_URL);
  }

  async getAuthors(): Promise<Author[]> {
    const { data } = await this._instance.get<Author.Server[]>('/authors');

    const adapteeAuthors = data.map(post => new Author(post));

    return adapteeAuthors;
  }
}
