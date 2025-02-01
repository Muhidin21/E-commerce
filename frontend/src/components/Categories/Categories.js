import React from 'react';
import { Link } from 'react-router-dom';
import Images from '../Assets/images';
import './Categories.css';

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "Men's Fashion",
      image: Images.banners.men,
      path: '/men'
    },
    {
      id: 2,
      title: "Women's Fashion",
      image: Images.banners.women,
      path: '/women'
    },
    {
      id: 3,
      title: "Kid's Fashion",
      image: Images.banners.kids,
      path: '/kids'
    }
  ];

  return (
    <section className="categories">
      <div className="categories-container">
        <h2 className="categories-title">Shop By Category</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <Link to={category.path} key={category.id} className="category-card">
              <div className="category-image-container">
                <img src={category.image} alt={category.title} className="category-image" />
              </div>
              <div className="category-overlay">
                <h3 className="category-title">{category.title}</h3>
                <button className="shop-now-btn">Shop Now</button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories; 