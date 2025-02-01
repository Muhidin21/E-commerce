export const categories = {
    main: [
        {
            id: 'men',
            name: 'Men',
            image: process.env.PUBLIC_URL + '/images/categories/men.jpg',
            description: 'Shop the latest trends in men\'s fashion',
            subCategories: ['Clothing', 'Shoes', 'Accessories', 'Sports'],
            featured: true
        },
        {
            id: 'women',
            name: 'Women',
            image: process.env.PUBLIC_URL + '/images/categories/women.jpg',
            description: 'Discover women\'s fashion and accessories',
            subCategories: ['Clothing', 'Shoes', 'Accessories', 'Beauty'],
            featured: true
        },
        {
            id: 'kids',
            name: 'Kids',
            image: process.env.PUBLIC_URL + '/images/categories/kids.jpg',
            description: 'Everything for your little ones',
            subCategories: ['Boys', 'Girls', 'Toys', 'School'],
            featured: true
        }
    ],
    subCategories: {
        men: {
            clothing: [
                { id: 'shirts', name: 'Shirts', count: 156 },
                { id: 'jeans', name: 'Jeans', count: 94 },
                { id: 'jackets', name: 'Jackets', count: 78 },
                { id: 't-shirts', name: 'T-Shirts', count: 212 },
                { id: 'suits', name: 'Suits', count: 45 }
            ],
            shoes: [
                { id: 'casual', name: 'Casual Shoes', count: 68 },
                { id: 'formal', name: 'Formal Shoes', count: 54 },
                { id: 'sports', name: 'Sports Shoes', count: 89 }
            ],
            accessories: [
                { id: 'watches', name: 'Watches', count: 112 },
                { id: 'belts', name: 'Belts', count: 65 },
                { id: 'wallets', name: 'Wallets', count: 78 }
            ]
        },
        women: {
            clothing: [
                { id: 'dresses', name: 'Dresses', count: 234 },
                { id: 'tops', name: 'Tops', count: 178 },
                { id: 'jeans', name: 'Jeans', count: 145 },
                { id: 'skirts', name: 'Skirts', count: 87 }
            ],
            shoes: [
                { id: 'heels', name: 'Heels', count: 98 },
                { id: 'flats', name: 'Flats', count: 76 },
                { id: 'boots', name: 'Boots', count: 54 }
            ],
            accessories: [
                { id: 'bags', name: 'Bags', count: 167 },
                { id: 'jewelry', name: 'Jewelry', count: 245 },
                { id: 'scarves', name: 'Scarves', count: 89 }
            ]
        },
        kids: {
            boys: [
                { id: 't-shirts', name: 'T-Shirts', count: 134 },
                { id: 'jeans', name: 'Jeans', count: 78 },
                { id: 'shoes', name: 'Shoes', count: 92 }
            ],
            girls: [
                { id: 'dresses', name: 'Dresses', count: 156 },
                { id: 'tops', name: 'Tops', count: 123 },
                { id: 'shoes', name: 'Shoes', count: 88 }
            ]
        }
    }
}; 