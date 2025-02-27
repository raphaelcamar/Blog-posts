import { createRoot } from 'react-dom/client';
import { App } from '@/app';

const domNode = document.getElementById('main');
const root = createRoot(domNode);

root.render(<App />);
