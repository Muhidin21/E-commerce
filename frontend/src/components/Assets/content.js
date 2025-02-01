export const content = {
    hero: {
        title: 'Summer Collection 2024',
        subtitle: 'Discover the latest trends in fashion',
        buttonText: 'Shop Now'
    },
    features: [
        {
            id: 'shipping',
            icon: 'FaTruck',
            title: 'Free Shipping',
            description: 'On orders over $50'
        },
        {
            id: 'returns',
            icon: 'FaUndo',
            title: '30 Days Return',
            description: 'Money back guarantee'
        },
        {
            id: 'support',
            icon: 'FaHeadset',
            title: '24/7 Support',
            description: 'Dedicated support'
        }
    ],
    promotions: {
        exclusive: {
            title: 'Exclusive Offer',
            description: 'Get 30% off on new arrivals',
            buttonText: 'Shop Now',
            backgroundImage: process.env.PUBLIC_URL + '/images/offer-bg.jpg'
        },
        newsletter: {
            title: 'Subscribe to Our Newsletter',
            description: 'Get the latest updates on new products and upcoming sales',
            buttonText: 'Subscribe',
            placeholder: 'Your email address'
        }
    },
    sections: {
        popularCategories: {
            title: 'Popular Categories',
            categories: [
                {
                    title: "Men's Fashion",
                    link: '/men',
                    image: process.env.PUBLIC_URL + '/images/categories/men.jpg'
                },
                {
                    title: "Women's Fashion",
                    link: '/women',
                    image: process.env.PUBLIC_URL + '/images/categories/women.jpg'
                },
                {
                    title: "Kids' Fashion",
                    link: '/kids',
                    image: process.env.PUBLIC_URL + '/images/categories/kids.jpg'
                }
            ]
        },
        popularProducts: {
            title: 'Popular Products',
            sections: [
                {
                    title: "Popular in Men's",
                    category: 'men'
                },
                {
                    title: "Popular in Women's",
                    category: 'women'
                },
                {
                    title: "Popular in Kids'",
                    category: 'kids'
                }
            ]
        }
    },
    footer: {
        about: {
            title: 'About Us',
            content: 'Your one-stop destination for fashion needs. We bring you the latest trends from around the world.'
        },
        customerService: {
            title: 'Customer Service',
            links: [
                { text: 'Contact Us', url: '/contact' },
                { text: 'Shipping Policy', url: '/shipping' },
                { text: 'Returns & Exchanges', url: '/returns' },
                { text: 'FAQs', url: '/faqs' }
            ]
        },
        quickLinks: {
            title: 'Quick Links',
            links: [
                { text: 'My Account', url: '/account' },
                { text: 'Track Order', url: '/track-order' },
                { text: 'Wishlist', url: '/wishlist' },
                { text: 'Size Guide', url: '/size-guide' }
            ]
        },
        social: {
            title: 'Follow Us',
            links: [
                { platform: 'Facebook', url: '#', icon: 'FaFacebook' },
                { platform: 'Instagram', url: '#', icon: 'FaInstagram' },
                { platform: 'Twitter', url: '#', icon: 'FaTwitter' },
                { platform: 'Pinterest', url: '#', icon: 'FaPinterest' }
            ]
        }
    }
}; 