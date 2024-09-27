'use client';
import React from "react";

export function FilterByCategory({ categories, selectedCategory, onCategoryChange }) {
    const safeCategories = Array.isArray(categories) ? categories : [];

    return (
        <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="p-2 border rounded-md"
        >
            <option value="">All Categories</option>
            {safeCategories.map((category) => (
                <option key={category} value={category}>
                    {category}
                </option>
            ))}
        </select>
    );
}

export function SortOptions({ currentSortBy, currentSortOrder, onSortChange }) {
    const handleSortChange = (e) => {
        const [sortBy, sortOrder] = e.target.value.split('-');
        onSortChange(sortBy, sortOrder);
    };

    return (
        <select
            value={`${currentSortBy}-${currentSortOrder}`}
            onChange={handleSortChange}
            className="p-2 border rounded"
        >
            <option value="">Sort by</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="title-asc">Title: A-Z</option>
            <option value="title-desc">Title: Z-A</option>
        </select>
    );
}

export function ResetFilters({ onReset }) {
    return (
        <button
            onClick={onReset}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-black transition-colors duration-300 mt-4 ml-2"
        >
            Reset All Filters
        </button>
    );
}
