import React from 'react';

export default function FilterSort({
    categories,
    currentCategory,
    currentSortBy,
    currentSortOrder,
    onFilter,
    onSort,
    onReset
}) {
    // const safeCategories = Array.isArray(categories) ? categories : [];

    // const handleSortChange = (e) => {
    //     const [sortBy, sortOrder] = e.target.value.split('-');
    //     onSortChange(sortBy, sortOrder);
    // };

    return (
        <div className="flex flex-wrap gap-4 py-6 px-6 items-center">
            <select
                value={currentCategory}
                onChange={(e) => onFilter(e.target.value)}
                className="p-2 border rounded-md"
            >
                <option value="">All Categories</option>
                {categories && categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>

            <select
                value={`${currentSortBy}-${currentSortOrder}`}
                onChange={(e) => {
                    const [sortBy, sortOrder] = e.target.value.split('-');
                    onSort(sortBy, sortOrder);
                }}
                className="p-2 border rounded-md"
            >
                <option value="">Sort by</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="title-asc">Title: A-Z</option>
                <option value="title-desc">Title: Z-A</option>
            </select>

            <button
                onClick={onReset}
                className="bg-primary text-white p-2 rounded-md hover:bg-black transition-colors duration-300"
            >
                Reset All Filters
            </button>
        </div>
    );
}