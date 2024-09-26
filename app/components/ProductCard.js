'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

/**
 * ProductCard component displays a product with an image carousel, title, price, and other details.
 *
 * @param {Object} props - The properties passed to the ProductCard component.
 * @param {Object} props.product - The product object containing details like id, title, images, price, category, and rating.
 * @returns {JSX.Element} The product card component with product details and image carousel.
 */
export default function ProductCard({ product }) {
    // State to track the current image index in the product's image array
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    /**
     * Navigate to the next image in the carousel.
     *
     * @param {Event} e - The click event triggered by the user.
     */
    const nextImage = (e) => {
        e.preventDefault();
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % product.images.length
        );
    };

    /**
     * Navigate to the previous image in the carousel.
     *
     * @param {Event} e - The click event triggered by the user.
     */
    const prevImage = (e) => {
        e.preventDefault();
        setCurrentImageIndex((prevIndex) =>
            (prevIndex - 1 + product.images.length) % product.images.length
        );
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Link to the product details page */}
            <Link href={`/product/${product.id}`}>
                <div className="relative">
                    {/* Display the current image of the product */}
                    <Image
                        src={product.images[currentImageIndex] || product.thumbnail}
                        alt={product.title}
                        width={250}
                        height={250}
                        objectFit="cover"
                    />
                    {/* Image navigation buttons */}
                    {product.images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center text-xl"
                            >
                                &#8249;
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center text-xl"
                            >
                                &#8250;
                            </button>
                        </>
                    )}
                </div>

                {/* Product details */}
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-4 text-black">{product.title}</h2>
                    <p className="inline-block font-semibold bg-green-700 rounded-full px-3 py-1 text-sm text-white mr-2 mb-2">
                        {product.category}
                    </p>
                    <span className="text-sm text-black">Rating: {product.rating}/5</span>
                    <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-black">R{product.price.toFixed(2)}</span>
                        <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-black transition-colors duration-300 mt-4 ml-2">
                            View Details
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
}
