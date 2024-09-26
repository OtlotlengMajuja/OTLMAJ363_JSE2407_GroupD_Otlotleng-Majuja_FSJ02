'use client';
import React from "react";

export default function SortOptions({ currentSortBy, currentSortOrder, onSortChange }) {
    const handleSortChange = (e) => {
        const [sortBy, sortOrder] = e.target.value.split('-');
        onSortChange(sortBy, sortOrder);
    };

    return (
        <select
            value={`${currentSortBy}-${currentSortOrder}`}
            onChange={handleSortChange}
            className="p-2 border rounded mb-4"
        >
            <option value="">Sort by</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="title-asc">Title: A-Z</option>
            <option value="title-desc">Title: Z-A</option>
        </select>
    );
}