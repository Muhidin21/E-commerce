import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/product/ProductCard';
import { FaTruck, FaUndo, FaHeadset } from 'react-icons/fa';
import { Images, content } from '../../components/Assets';
import './Home.css';

const Home = () => {
  // Apply CSS variables for background images
  React.useEffect(() => {
    document.documentElement.style.setProperty('--hero-bg', `url(${Images.heroBg})`);
    document.documentElement.style.setProperty('--hero-gradient', 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))');
    document.documentElement.style.setProperty('--offer-bg', `url(${Images.offerBg})`);
    document.documentElement.style.setProperty('--offer-gradient', 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))');
  }, []);

  const featuredProducts = {
    men: [
      {
        _id: 'm1',
        name: 'Classic Leather Jacket',
        price: 129.99,
        image: Images.products.men.leatherJacket,
        category: 'men'
      },
      {
        _id: 'm2',
        name: 'Premium Denim Jeans',
        price: 79.99,
        image: Images.products.men.jeans,
        category: 'men'
      },
    ],
    women: [
      {
        _id: 'w1',
        name: 'Floral Summer Dress',
        price: 89.99,
        image: Images.products.women.summerDress,
        category: 'women'
      },
      {
        _id: 'w2',
        name: 'Designer Handbag',
        price: 159.99,
        image: Images.products.women.handbag,
        category: 'women'
      },
    ],
    kids: [
      {
        _id: 'k1',
        name: 'Cartoon Print T-Shirt',
        price: 24.99,
        image: Images.products.kids.tshirt,
        category: 'kids'
      },
      {
        _id: 'k2',
        name: 'Comfortable Sneakers',
        price: 49.99,
        image: Images.products.kids.sneakers,
        category: 'kids'
      },
    ]
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-image">
          <img src={Images.special.hero} alt="Fashion Hero" />
          <div className="hero-content">
            <h1>Style Redefined</h1>
            <p>Express yourself through fashion</p>
            <Link to="/shop" className="shop-now-btn">Shop Now</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <FaTruck className="feature-icon" />
          <h3>Free Shipping</h3>
          <p>On orders over $50</p>
        </div>
        <div className="feature">
          <FaUndo className="feature-icon" />
          <h3>Easy Returns</h3>
          <p>30 days return policy</p>
        </div>
        <div className="feature">
          <FaHeadset className="feature-icon" />
          <h3>24/7 Support</h3>
          <p>Customer service support</p>
        </div>
      </section>

      {/* Exclusive Offer */}
      <section className="exclusive-offer">
        <div className="offer-content">
          <h2>{content.promotions.exclusive.title}</h2>
          <p>{content.promotions.exclusive.description}</p>
          <Link to="/shop" className="offer-btn">
            {content.promotions.exclusive.buttonText}
          </Link>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="popular-categories">
        <h2>{content.sections.popularCategories.title}</h2>
        <div className="category-grid">
          {content.sections.popularCategories.categories.map((category, index) => (
            <Link key={index} to={category.link} className="category-card">
              <img src={category.image} alt={category.title} />
              <div className="category-content">
                <h3>{category.title}</h3>
                <p>Shop Now →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Products */}
      <section className="popular-products">
        {content.sections.popularProducts.sections.map((section, index) => (
          <React.Fragment key={index}>
            <h2>{section.title}</h2>
            <div className="product-grid">
              {featuredProducts[section.category].map(product => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </React.Fragment>
        ))}
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="newsletter-content">
          <h2>{content.promotions.newsletter.title}</h2>
          <p>{content.promotions.newsletter.description}</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder={content.promotions.newsletter.placeholder} 
            />
            <button type="submit">
              {content.promotions.newsletter.buttonText}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home; 