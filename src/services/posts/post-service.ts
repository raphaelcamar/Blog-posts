import { PostRepository } from './protocol';
import { BaseServicesInstace } from '../base';
import { Post } from '@/entities';

export class PostService extends BaseServicesInstace implements PostRepository {
  constructor() {
    super(process.env.BASE_URL);
  }

  async getPosts(): Promise<Post.Server[]> {
    const { data } = await this._instance.get<Post[]>('/posts');
    const adapteePosts = data.map(post => new Post(post));

    return adapteePosts;
  }
}
