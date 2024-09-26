import Link from 'next/link';

/**
 * Header component for the e-commerce site.
 * This component contains the site logo and a navigation menu with links to different pages.
 *
 * @returns {JSX.Element} The header component with a logo and navigation links.
 */
export default function Header() {
    return (
        <header className="bg-green-800 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                {/* Logo and link to the home page */}
                <Link href="/" className="flex items-center">
                    <span className="font-['Anek_Devanagari'] text-3xl text-white">Shopporium</span>
                </Link>
                {/* Navigation links */}
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/" className="text-white hover:text-green-200 transition-colors duration-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-white hover:text-green-200 transition-colors duration-300">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/cart" className="text-white hover:text-green-200 transition-colors duration-300">
                                Cart
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
