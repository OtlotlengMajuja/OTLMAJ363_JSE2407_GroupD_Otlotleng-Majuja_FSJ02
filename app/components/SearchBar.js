'use client';

export default function SearchBar({ initialValue, onSearchChange }) {
    return (
        <input
            type="text"
            value={initialValue}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search products..."
            className="p-2 border rounded"
        />
    );
}