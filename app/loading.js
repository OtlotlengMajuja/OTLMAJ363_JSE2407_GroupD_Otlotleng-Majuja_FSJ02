/**
 * Loading component that displays a loading spinner and a message while data is being fetched or processed.
 *
 * @returns {JSX.Element} A JSX element that shows a loading spinner and a "Loading products..." message.
 */
export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
            <div className="relative">
                {/* Spinner element */}
                <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-green-800 border-solid"></div>
                {/* Pulsing effect for visual enhancement */}
                <div className="animate-pulse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            {/* Loading message */}
            <p className="mt-6 text-green-800 text-xl font-semibold animate-pulse">Loading products...</p>
        </div>
    );
}
