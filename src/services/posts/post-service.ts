import { PostRepository } from './protocol';
import { BaseServicesInstace } from '../base';

export class PostService extends BaseServicesInstace implements PostRepository {
  constructor() {
    super(process.env.BASE_URL);
  }

  async getPosts() {
    const { data } = await this._instance.get('/posts');

    return data;
  }
}
