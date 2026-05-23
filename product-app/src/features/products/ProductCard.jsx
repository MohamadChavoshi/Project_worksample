import { Link } from 'react-router-dom';
import {ButtonAddCart} from '../../components/ui/Button'
function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <h3>{product.name}</h3>
      <p className="price">{product.price.toLocaleString('fa-IR')} تومان</p>
      <ButtonAddCart quantity={2} onClick={() => addToCart(product)} />
    </div>
  );
}

export default ProductCard;
