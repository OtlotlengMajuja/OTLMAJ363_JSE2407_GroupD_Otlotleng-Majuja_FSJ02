'use client';

/**
 * Error component that displays an error message and provides a button to retry the operation.
 *
 * @param {Object} props - The properties passed to the Error component.
 * @param {Error} props.error - The error object that contains details about what went wrong.
 * @param {Function} props.reset - The function to call to retry or reset the operation.
 * @returns {JSX.Element} A JSX element displaying the error message and a retry button.
 */
export default function Error({ error, reset }) {
    return (
        <div className="text-center">
            <h2 className="font-bold">Something went wrong..</h2>
            <p>{error.message}</p>
            {/* Button to retry the operation */}
            <button onClick={reset} className="font-bold">Please try again later</button>
        </div>
    );
}
