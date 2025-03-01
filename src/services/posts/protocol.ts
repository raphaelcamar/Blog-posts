import { Post } from '@/entities';

export interface PostProtocol {
  getPosts: () => Promise<Post[]>;
}
