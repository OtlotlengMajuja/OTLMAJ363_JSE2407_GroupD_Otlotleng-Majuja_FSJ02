const API_BASE_URL = 'https://next-ecommerce-api.vercel.app';

/**
 * Fetches a list of products from the e-commerce API.
 *
 * @param {number} [page=1] - The page number to fetch. Defaults to 1.
 * @param {number} [limit=20] - The number of products to fetch per page. Defaults to 20.
 * @returns {Promise<Object>} The product data in JSON format.
 * @throws {Error} If the request fails or the response is not OK.
 */
export async function getProducts({ page = 1, limit = 20, search = '', category = '', sort = '' }) {
    const params = new URLSearchParams({
        limit: limit.toString(),
        skip: ((page - 1) * limit).toString(),
        q: search,
        category,
    });

    if (sort === 'price_asc') {
        params.append('sort', 'price');
        params.append('order', 'asc');
    } else if (sort === 'price_desc') {
        params.append('sort', 'price');
        params.append('order', 'desc');
    }

    const response = await fetch(`${API_BASE_URL}/products?${params.toString()}`);

    // Check if the response is successful, throw error if not
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }

    // Return the response in JSON format
    return response.json();
}

/**
 * Fetches a specific product by its ID from the e-commerce API.
 *
 * @param {string} id - The unique identifier of the product.
 * @returns {Promise<Object>} The product data in JSON format.
 * @throws {Error} If the request fails or the response is not OK.
 */
export async function getProductById(id) {
    // Fetch the product by its ID from the API
    const response = await fetch(`${API_BASE_URL}/products/${id}`);

    // Check if the response is successful, throw error if not
    if (!response.ok) {
        throw new Error('Failed to fetch product');
    }

    // Return the product data in JSON format
    return response.json();
}
