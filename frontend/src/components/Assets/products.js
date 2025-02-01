export const products = {
    men: {
        clothing: [
            {
                id: 'mjkt001',
                name: 'Classic Leather Jacket',
                price: 129.99,
                originalPrice: 159.99,
                description: 'Premium quality leather jacket with a modern fit. Perfect for any casual occasion.',
                image: process.env.PUBLIC_URL + '/images/products/men/leather-jacket.jpg',
                category: 'men',
                subCategory: 'jackets',
                sizes: ['S', 'M', 'L', 'XL'],
                colors: ['Black', 'Brown', 'Navy'],
                material: 'Genuine Leather',
                inStock: true,
                rating: 4.5,
                reviews: 128,
                tags: ['leather', 'jacket', 'winter', 'casual'],
                features: [
                    'Genuine leather construction',
                    'Quilted lining for warmth',
                    'Multiple pockets',
                    'Heavy-duty zipper'
                ]
            },
            {
                id: 'mjns001',
                name: 'Premium Denim Jeans',
                price: 79.99,
                originalPrice: 99.99,
                description: 'Comfortable and stylish denim jeans with perfect fit and durability.',
                image: process.env.PUBLIC_URL + '/images/products/men/jeans.jpg',
                category: 'men',
                subCategory: 'jeans',
                sizes: ['30x32', '32x32', '34x32', '36x32'],
                colors: ['Blue', 'Black', 'Grey'],
                material: 'Denim',
                inStock: true,
                rating: 4.3,
                reviews: 95,
                tags: ['denim', 'jeans', 'casual', 'everyday'],
                features: [
                    'Premium denim fabric',
                    'Comfortable stretch',
                    'Classic 5-pocket design',
                    'Durable stitching'
                ]
            }
        ],
        accessories: [
            {
                id: 'mwch001',
                name: 'Luxury Chronograph Watch',
                price: 199.99,
                originalPrice: 249.99,
                description: 'Elegant chronograph watch with premium build quality and sophisticated design.',
                image: process.env.PUBLIC_URL + '/images/products/men/watch.jpg',
                category: 'men',
                subCategory: 'accessories',
                colors: ['Silver', 'Gold', 'Rose Gold'],
                material: 'Stainless Steel',
                inStock: true,
                rating: 4.7,
                reviews: 84,
                features: [
                    'Chronograph function',
                    'Water resistant',
                    'Sapphire crystal glass',
                    'Date display'
                ]
            }
        ]
    },
    women: {
        clothing: [
            {
                id: 'wdrs001',
                name: 'Floral Summer Dress',
                price: 89.99,
                originalPrice: 119.99,
                description: 'Beautiful floral print dress perfect for summer days and special occasions.',
                image: process.env.PUBLIC_URL + '/images/products/women/summer-dress.jpg',
                category: 'women',
                subCategory: 'dresses',
                sizes: ['XS', 'S', 'M', 'L'],
                colors: ['Blue Floral', 'Pink Floral', 'White Floral'],
                material: 'Cotton Blend',
                inStock: true,
                rating: 4.6,
                reviews: 156,
                tags: ['dress', 'summer', 'floral', 'casual'],
                features: [
                    'Lightweight fabric',
                    'Floral print',
                    'A-line cut',
                    'Hidden zipper'
                ]
            }
        ],
        accessories: [
            {
                id: 'wbag001',
                name: 'Designer Handbag',
                price: 159.99,
                originalPrice: 199.99,
                description: 'Elegant designer handbag with spacious compartments and premium finish.',
                image: process.env.PUBLIC_URL + '/images/products/women/handbag.jpg',
                category: 'women',
                subCategory: 'accessories',
                colors: ['Black', 'Brown', 'Beige'],
                material: 'Premium Leather',
                inStock: true,
                rating: 4.8,
                reviews: 112,
                features: [
                    'Genuine leather',
                    'Multiple compartments',
                    'Adjustable strap',
                    'Gold-tone hardware'
                ]
            }
        ]
    },
    kids: {
        clothing: [
            {
                id: 'ktsh001',
                name: 'Cartoon Print T-Shirt',
                price: 24.99,
                originalPrice: 29.99,
                description: 'Fun and comfortable t-shirt with playful cartoon prints.',
                image: process.env.PUBLIC_URL + '/images/products/kids/tshirt.jpg',
                category: 'kids',
                subCategory: 't-shirts',
                sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
                colors: ['White', 'Blue', 'Yellow'],
                material: 'Cotton',
                inStock: true,
                rating: 4.4,
                reviews: 78,
                tags: ['t-shirt', 'casual', 'cartoon', 'kids'],
                features: [
                    'Soft cotton fabric',
                    'Fun cartoon prints',
                    'Easy to wash',
                    'Comfortable fit'
                ]
            }
        ],
        shoes: [
            {
                id: 'kshs001',
                name: 'Comfortable Sneakers',
                price: 49.99,
                originalPrice: 59.99,
                description: 'Durable and comfortable sneakers perfect for active kids.',
                image: process.env.PUBLIC_URL + '/images/products/kids/sneakers.jpg',
                category: 'kids',
                subCategory: 'shoes',
                sizes: ['UK 10', 'UK 11', 'UK 12', 'UK 13'],
                colors: ['Blue/White', 'Red/White', 'Black/White'],
                material: 'Synthetic',
                inStock: true,
                rating: 4.5,
                reviews: 92,
                features: [
                    'Lightweight design',
                    'Non-slip sole',
                    'Easy velcro closure',
                    'Breathable material'
                ]
            }
        ]
    }
}; 