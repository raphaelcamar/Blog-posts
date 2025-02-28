import { Post } from "@/entities";

export interface PostRepository {
  getPosts: () => Promise<Post[]>;
}
