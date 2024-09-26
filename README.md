# FSJ01 Challenge 1 - Shopporium

## Project Brief

The goal of the e-commerce platform Shopporium is to give customers a flawless purchasing experience. The site has an easy-to-use design that manages user evaluations, displays products, and allows for pagination for quick browsing. To guarantee performance, maintainability, and responsiveness, the application makes use of contemporary web technologies.

## Overview

With Shopporium, customers can:

- See a grid of products featuring ratings, prices, titles, and photos.
- Browse through product details, such as categories, reviews, and descriptions.
- To view numerous product pages, use the pagination controls.
- Get feedback in the event that the data fetching process fails.

Next.js and React are used in the application's construction, utilizing both client-side and server-side rendering for maximum efficiency. For styling, Tailwind CSS is also used, giving it a sleek and contemporary appearance.

## Technologies Used

- **Next.js:** A React framework for server-side rendering and static site generation.
- **React:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for designing responsive layouts.
- **JSDoc:** For documenting the JavaScript code.

## Setup Instructions

### Installation

1. **Clone the repository:** Open your terminal and select powershell, then:

   - git clone `https://github.com/OtlotlengMajuja/JSF-Portfolio_Piece_OTLMAJ363_JSE2401_GroupD_Otlotleng-Majuja_JSF04.git`
   - cd shopporium

2. **Install dependencies:** Make sure you have Node.js installed, then run:
   - `npm install`
   -
3. **Configure environment variables:** Create a .`env.local` file in the root of the project and add your environment variables:

   - NEXT_PUBLIC_API_BASE_URL=https://next-ecommerce-api.vercel.app

4. **Running the project**
   - to start the development server run `npm run dev`

## Usage Examples

### Home Page

The home page displays a grid of products retrieved from the API. It has pagination controls so you can go between the various product pages.

### Product Page

The product page offers comprehensive details on a chosen item, such as images, a description, a price, a category, and customer review.

### Error Handling

If there is an issue fetching data, an error message will be displayed.

### Loading State

While data is being fetched, a loading spinner and message are shown to inform users that content is loading.
