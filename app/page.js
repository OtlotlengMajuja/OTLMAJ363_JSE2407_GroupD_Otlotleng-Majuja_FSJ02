import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getProducts, getCategories } from './lib/api';
import ProductGrid from './components/ProductGrid';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import FilterByCategory from './components/FilterCategory';
import SortOptions from './components/SortOptions';
import ResetFilters from './components/ResetFilters';
import Error from './error';
import Loading from './loading';

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
  const router = useRouter();
  const searchParams = useSearchParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);

  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [category, setCategory] = useState(searchParams.get('category') || '');
  const [sort, setSort] = useState(searchParams.get('sort') || '');

  const limit = 20;

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await getProducts({ page, limit, search, category, sort });
      setProducts(data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page, search, category, sort]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const fetchedCategories = await getCategories();
        setCategories(fetchedCategories);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch categories');
        setIsLoading(false);
      }
    }

    fetchCategories();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    if (page !== 1) params.set('page', page.toString());
    if (search) params.set('search', search);
    if (category) params.set('category', category);
    if (sort) params.set('sort', sort);

    router.push(`/?${params.toString()}`, { scroll: false });
  }, [page, search, category, sort, router]);

  const handleSearchChange = (newSearch) => {
    setSearch(newSearch);
    setPage(1);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setPage(1);
  };

  const handleSortChange = (newSort) => {
    setSort(newSort);
    setPage(1);
  };

  const handleResetFilters = () => {
    setSearch('');
    setCategory('');
    setSort('');
    setPage(1);
  };

  const hasFilters = search || category || sort;

  if (error) {
    return <Error error={error} reset={fetchProducts} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className="text-3xl font-bold mb-8">Explore the best store</h1>

      <div className="flex flex-wrap gap-4 mb-8">
        <SearchBar initialValue={search} onSearchChange={handleSearchChange} />
        <FilterByCategory
          categories={categories}
          selectedCategory={category}
          onCategoryChange={handleCategoryChange}
        />
        <SortOptions initialValue={sort} onSortChange={handleSortChange} />
        {hasFilters && <ResetFilters onReset={handleResetFilters} />}
      </div>

      {/* Render the product grid and pagination controls */}
      <ProductGrid products={products} />
      <Pagination
        currentPage={page}
        hasMore={products.length === limit}
        onPageChange={setPage}
      />
    </div>
  );
}
