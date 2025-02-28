export interface PostRepository {
  getPosts: () => Promise<any[]>;
}
