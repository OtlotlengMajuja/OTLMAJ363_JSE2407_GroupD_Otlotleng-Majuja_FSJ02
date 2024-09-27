import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export default function ProductGrid({ products }) {
    const searchParams = useSearchParams();

    const ProductCard = ({ product }) => {
        const [currentImageIndex, setCurrentImageIndex] = useState(0);

        const nextImage = (e) => {
            e.preventDefault();
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % product.images.length
            );
        };

        const prevImage = (e) => {
            e.preventDefault();
            setCurrentImageIndex((prevIndex) =>
                (prevIndex - 1 + product.images.length) % product.images.length
            );
        };

        const buildProductLink = () => {
            const params = new URLSearchParams(searchParams);
            params.delete('page');
            return `/product/${product.id}?${params.toString()}`;
        };

        return (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Link href={buildProductLink()}>
                    <div className="relative p-4">
                        <div className="md:w-1/2">
                            <Image
                                src={product.images[currentImageIndex] || product.thumbnail}
                                alt={product.title}
                                width={250}
                                height={250}
                                objectFit="cover"
                            />
                        </div>
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
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-4 text-black">{product.title}</h2>
                        <p className="inline-block font-semibold bg-primary rounded-full px-3 py-1 text-sm text-white mr-2 mb-2">
                            {product.category}
                        </p>
                        <span className="text-sm text-black">Rating: {product.rating}/5</span>
                        <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold text-black">R{product.price.toFixed(2)}</span>
                            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-black transition-colors duration-300 mt-4 ml-2">
                                View Details
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        );
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}