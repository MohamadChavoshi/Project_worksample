import { useState } from 'react';
import ProductCard from '../features/products/ProductCard';
import Filter from '../features/products/Filter';

function ProductList({ products, addToCart }) {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = (filters) => {
    let filtered = products;

    if (filters.category) {
      filtered = filtered.filter(p => p.category === filters.category);
    }

    if (filters.maxPrice) {
      filtered = filtered.filter(p => p.price <= filters.maxPrice);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="product-list-container">
      <Filter products={products} onFilter={handleFilter} />
      
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            addToCart={addToCart} 
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
