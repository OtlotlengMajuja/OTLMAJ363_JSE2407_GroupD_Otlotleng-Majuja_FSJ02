'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getProducts, getCategories } from './lib/api';
import ProductGrid from './components/ProductGrid';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import { FilterByCategory, SortOptions, ResetFilters } from './components/FilterSort';
import Error from './error';
import Loading from './loading';

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams(); // Use the hook to get URL search parameters

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
      } catch (err) {
        setError('Failed to fetch categories');
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
      <h1 className="text-3xl font-bold mb-8 text-center sm:text-left">Explore the best store</h1>

      <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8">
        <div className="w-full sm:w-auto">
          <SearchBar initialValue={search} onSearchChange={handleSearchChange} />
        </div>
        <div className="w-full sm:w-auto">
          <FilterByCategory
            categories={categories}
            selectedCategory={category}
            onCategoryChange={handleCategoryChange}
          />
        </div>
        <div className="w-full sm:w-auto">
          <SortOptions initialValue={sort} onSortChange={handleSortChange} />
        </div>
        {hasFilters && (
          <div className="w-full sm:w-auto">
            <ResetFilters onReset={handleResetFilters} />
          </div>
        )}
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
