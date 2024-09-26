'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar({ initialValue }) {
    const [search, setSearch] = useState(initialValue);
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/?search=${encodeURIComponent(search)}`);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="p-2 border rounded"
            />
            <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">Search</button>
        </form>
    );
}