import { Route, Routes } from 'react-router';

import { HomePage } from '@/pages/home';
import { BlogListPage } from '@/pages/blog-list';

const BlogPost = () => (
  <>
    <h2>Post</h2>
    <p>Conteúdo do post</p>
  </>
);

const NotFound = () => <h1>Página não encontrada</h1>;

export const RootRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />}>
      <Route index element={<BlogListPage />} />
      <Route path=":id" element={<BlogPost />} />
    </Route>

    <Route path="*" element={<NotFound />} />
  </Routes>
);
