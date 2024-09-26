'use client';

import { useState } from 'react';
import Image from 'next/image';

/**
 * ImageGallery component that displays an image carousel and thumbnails.
 *
 * @param {Object} props
 * @param {string[]} props.images - Array of image URLs to display in the gallery.
 * @returns {JSX.Element} The image gallery component.
 */
export default function ImageGallery({ images }) {
    // State to track the currently displayed image
    const [currentImage, setCurrentImage] = useState(0);

    /**
     * Move to the next image in the gallery.
     * If on the last image, it loops back to the first image.
     */
    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    /**
     * Move to the previous image in the gallery.
     * If on the first image, it loops back to the last image.
     */
    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    /**
     * Set the current image to a specific index.
     *
     * @param {number} index - The index of the image to display.
     */
    const handleImageClick = (index) => {
        setCurrentImage(index);
    };

    return (
        <div className="relative">
            {/* Main image display */}
            <Image
                src={images[currentImage]}
                alt="Product"
                width={800}
                height={600}
                objectFit="cover"
                className="w-full h-auto rounded-lg shadow-md"
            />
            {images.length > 1 && (
                <>
                    {/* Button to go to the previous image */}
                    <button
                        onClick={prevImage}
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors duration-300"
                        aria-label="Previous image"
                    >
                        &#8592;
                    </button>

                    {/* Button to go to the next image */}
                    <button
                        onClick={nextImage}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors duration-300"
                        aria-label="Next image"
                    >
                        &#8594;
                    </button>

                    {/* Thumbnails for each image */}
                    <div className="flex justify-center mt-4 space-x-2">
                        {images.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                width={100}
                                height={100}
                                objectFit="cover"
                                className={`h-16 w-16 object-cover cursor-pointer rounded-md transition-transform duration-300 hover:scale-110 ${currentImage === index ? 'border-2 border-indigo-600' : 'border border-gray-300'}`}
                                onClick={() => handleImageClick(index)}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
