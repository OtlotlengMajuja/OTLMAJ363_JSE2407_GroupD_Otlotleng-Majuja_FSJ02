'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SortOptions({ initialValue }) {
    const [sort, setSort] = useState(initialValue);
    const router = useRouter();

    useEffect(() => {
        router.push(`/?sort=${encodeURIComponent(sort)}`);
    }, [sort, router]);

    return (
        <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="p-2 border rounded mb-4"
        >
            <option value="">Sort by</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
        </select>
    );
}