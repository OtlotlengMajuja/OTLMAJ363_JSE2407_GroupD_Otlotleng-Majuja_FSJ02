'use client';

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