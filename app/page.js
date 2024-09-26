import { getProducts } from './lib/api';
import ProductGrid from './components/productGrid';
import Pagination from './components/pagination';
import { Suspense } from 'react';

/**
 * Home component that fetches and displays a grid of products and pagination controls.
 * It handles errors and loading states while fetching the product data.
 *
 * @param {Object} props - The properties passed to the Home component.
 * @param {Object} props.searchParams - The search parameters from the URL, including pagination information.
 * @param {string} [props.searchParams.page] - The current page number for pagination. Defaults to 1 if not provided.
 * @returns {JSX.Element} A JSX element that includes the product grid, pagination controls, and error handling.
 */
export default async function Home({ searchParams }) {
  const page = Number(searchParams.page) || 1; // Determine the current page number
  let products;
  let error;

  try {
    // Fetch products for the current page
    products = await getProducts(page);
  } catch (error) {
    error = error.message; // Capture and handle any errors
  }

  // Display an error message if fetching products fails
  if (error) {
    return <div className="text-red-600 text-center p-4 bg-red-100 rounded-lg">Error: {error}</div>;
  }

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {/* Render the product grid and pagination controls */}
        <ProductGrid products={products} />
        <Pagination currentPage={page} hasMore={products.length === 20} />
      </Suspense>
    </div>
  );
}
