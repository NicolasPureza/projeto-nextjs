import { CATEGORIES, PRODUCTS } from '../data/products';
import { CatalogClient } from '../components/CatalogClient';

// Server Component que carrega os dados no servidor e hidrata o Client Component
export default function HomePage() {
  return <CatalogClient initialProducts={PRODUCTS} categories={CATEGORIES} />;
}
