import { createFileRoute } from '@tanstack/react-router';

import { ProductsPage } from '@/pages';

export const Route = createFileRoute('/products')({
  component: ProductsPage,
});
