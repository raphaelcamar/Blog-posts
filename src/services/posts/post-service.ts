import { PostProtocol } from './protocol';
import { BaseServicesInstace } from '../base';
import { Post } from '@/entities';

export class PostService extends BaseServicesInstace implements PostProtocol {
  constructor() {
    super(process.env.BASE_URL);
  }

  async getPosts(): Promise<Post[]> {
    const { data } = await this._instance.get<Post.Server[]>('/posts');

    const adapteePosts = data.map(post => new Post(post));

    return adapteePosts;
  }
}
