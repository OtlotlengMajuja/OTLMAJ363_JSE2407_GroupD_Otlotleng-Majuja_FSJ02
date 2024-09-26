'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

/**
 * Reviews component that displays a list of customer reviews for a product.
 *
 * @param {Object} props - The properties passed to the Reviews component.
 * @param {Object[]} props.reviews - An array of review objects to be displayed.
 * Each review object contains the following:
 * - reviewerName: {string} The name of the person who wrote the review.
 * - date: {string} The date the review was written.
 * - rating: {number} The rating given by the reviewer (1-5).
 * - comment: {string} The review text provided by the customer.
 * @returns {JSX.Element} A list of customer reviews, including reviewer name, date, rating, and comment.
 */
export default function Reviews({ reviews }) {
    const router = useRouter();
    const [sortOption, setSortOption] = useState('');

    const handleSortChange = (e) => {
        const newSortOption = e.target.value;
        setSortOption(newSortOption);
        router.push(`?reviewSort=${newSortOption}`, { scroll: false });
    };

    return (
        <div className="mt-12 p-8 border-t">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold mb-4 text-primary">Customer reviews:</h3>
                <select
                    value={sortOption}
                    onChange={handleSortChange}
                    className="p-2 border rounded-md text-secondary"
                >
                    <option value="">Sort by</option>
                    <option value="date">Most Recent</option>
                    <option value="rating">Rating</option>
                </select>
            </div>
            <div className="space-y-6">
                {/* Map over the reviews array and render each review */}
                {reviews.map((review, index) => (
                    <div key={index} className="card rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-semibold text-lg text-black">{review.reviewerName}</span>
                            <span className="text-sm text-primary">
                                {new Date(review.date).toLocaleDateString('en-GB')}
                            </span>
                        </div>
                        <div className="flex items-center mb-2">
                            {/* Display star ratings */}
                            <div className="text-black-500 mr-2">
                                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                            </div>
                            <span className="text-primary">{review.rating} / 5</span>
                        </div>
                        {/* Display the review comment */}
                        <p className="text-black">{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>

    );
}
