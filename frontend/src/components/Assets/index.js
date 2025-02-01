import { default as Images } from './images';
import { default as Colors } from './colors';
import { products } from './products';
import { categories } from './categories';
import { content } from './content';
import allProducts, { 
    categorizedProducts, 
    featuredProducts, 
    newArrivals, 
    bestSellers, 
    topRated, 
    specialOffers 
} from './all_products';

export { Images, Colors, products, categories, content };
export { 
    allProducts,
    categorizedProducts, 
    featuredProducts, 
    newArrivals, 
    bestSellers, 
    topRated, 
    specialOffers 
};

// Re-export common constants and types
export const CURRENCY = {
    symbol: '$',
    code: 'USD'
};

export const BREAKPOINTS = {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1280px'
};

export const ROUTES = {
    home: '/',
    shop: '/shop',
    men: '/men',
    women: '/women',
    kids: '/kids',
    product: '/product/:id',
    cart: '/cart',
    checkout: '/checkout',
    account: '/account',
    wishlist: '/wishlist',
    orders: '/orders'
};

// Common validation patterns
export const PATTERNS = {
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    phone: /^\+?[\d\s-]{10,}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
};

// API endpoints
export const API_ENDPOINTS = {
    products: '/api/products',
    categories: '/api/categories',
    cart: '/api/cart',
    orders: '/api/orders',
    auth: '/api/auth',
    user: '/api/user'
}; 