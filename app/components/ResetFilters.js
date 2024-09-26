'use client';
import { useRouter } from 'next/navigation';

export default function ResetFilters({ onReset }) {
    const router = useRouter();

    const handleReset = () => {
        router.push('/');
    };

    return (
        <button
            onClick={onReset}
            className="mb-4 p-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300"
        >
            Reset All Filters
        </button>
    );
}