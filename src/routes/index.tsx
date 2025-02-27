import { Outlet, Route, Routes } from 'react-router';
import { DropdownButton } from '@/components/drop-down-button';

const BlogLayout = () => (
  <>
    <h1>Blog</h1>
    <DropdownButton
      buttonTitle="Category"
      items={['Category a', 'Category b', 'Category c', 'Category d', 'Category e', 'Category f']}
    />
    <Outlet />
  </>
);

const BlogList = () => (
  <>
    <p>Lista de posts</p>
  </>
);

const BlogPost = () => (
  <>
    <h2>Post</h2>
    <p>Conteúdo do post</p>
  </>
);

const NotFound = () => <h1>Página não encontrada</h1>;

export const RootRoutes = () => (
  <Routes>
    <Route path="/" element={<BlogLayout />}>
      <Route index element={<BlogList />} />
      <Route path=":id" element={<BlogPost />} />
    </Route>

    <Route path="*" element={<NotFound />} />
  </Routes>
);
