import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import Filter from './Filter';

function ProductList({ products, addToCart }) {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const categoriesFromUrl = searchParams.get('categories');
    const priceFromUrl = searchParams.get('maxPrice');

    let filtered = products;

    // فیلتر بر اساس دسته‌بندی‌ها
    if (categoriesFromUrl) {
      const categories = categoriesFromUrl.split(',');
      filtered = filtered.filter(p => categories.includes(p.category));
    }

    // فیلتر بر اساس حداکثر قیمت
    if (priceFromUrl) {
      const maxPrice = Number(priceFromUrl);
      filtered = filtered.filter(p => p.price <= maxPrice);
    }

    setFilteredProducts(filtered);
  }, [searchParams, products]);

  const handleFilter = (filters) => {
    let filtered = products;

    // فیلتر بر اساس دسته‌بندی‌ها
    if (filters.categories && filters.categories.length > 0) {
      filtered = filtered.filter(p => filters.categories.includes(p.category));
    }

    // فیلتر بر اساس حداکثر قیمت
    if (filters.maxPrice && filters.maxPrice < 20000000) {
      filtered = filtered.filter(p => p.price <= filters.maxPrice);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="product-list-container">
      <Filter products={products} onFilter={handleFilter} />
      
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={addToCart} 
            />
          ))
        ) : (
          <div className="no-products">
            <p>محصولی با این فیلترها یافت نشد</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .product-list-container {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 30px;
          padding: 20px;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
        }

        .no-products {
          grid-column: 1 / -1;
          text-align: center;
          padding: 60px 20px;
          color: #999;
          font-size: 18px;
        }

        @media (max-width: 768px) {
          .product-list-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default ProductList;
