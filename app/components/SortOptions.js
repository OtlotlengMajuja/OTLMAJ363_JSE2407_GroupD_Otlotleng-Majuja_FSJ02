'use client';

export default function SortOptions({ initialValue, onSortChange }) {
    return (
        <select
            value={initialValue}
            onChange={(e) => onSortChange(e.target.value)}
            className="p-2 border rounded mb-4"
        >
            <option value="">Sort by</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
        </select>
    );
}