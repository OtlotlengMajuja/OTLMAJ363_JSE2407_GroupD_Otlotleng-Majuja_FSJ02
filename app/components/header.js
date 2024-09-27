'use client'

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Header component for the e-commerce site.
 * This component contains the site logo and a navigation menu with links to different pages.
 *
 * @returns {JSX.Element} The header component with a logo and navigation links.
 */
export default function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();
        router.push(`/?search=${encodeURIComponent(searchTerm)}`);
    };

    return (
        <header className="bg-primary shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                {/* Logo and link to the home page */}
                <Link href="/" className="flex items-center">
                    <span className="font-['Anek_Devanagari'] text-3xl text-white">Shopporium</span>
                </Link>
                {/* Navigation links */}
                <form onSubmit={handleSearch} className="flex-grow max-w-md mx-4">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search products..."
                        className="w-full px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-dark"
                    />
                </form>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/" className="text-white hover:text-primary-dark transition-colors duration-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-white hover:text-primary-dark transition-colors duration-300">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/cart" className="text-white hover:text-primary-dark transition-colors duration-300">
                                Cart
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
