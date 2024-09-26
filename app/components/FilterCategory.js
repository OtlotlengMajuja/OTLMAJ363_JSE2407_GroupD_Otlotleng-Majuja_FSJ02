'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function FilterByCategory({ initialValue }) {
    const [category, setCategory] = useState(initialValue);
    const router = useRouter();

    useEffect(() => {
        router.push(`/?category=${encodeURIComponent(category)}`);
    }, [category, router]);

    return (
        <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border rounded mb-4"
        >
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            {/* Add more categories as needed */}
        </select>
    );
}