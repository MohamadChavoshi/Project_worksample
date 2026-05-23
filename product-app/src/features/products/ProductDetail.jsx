import { useParams, Link } from 'react-router-dom';
import ButtonAddCart from '../../components/ui/Button';

function ProductDetail({ products, addToCart }) {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="not-found">محصول یافت نشد</div>;
  }

  return (
    <div className="product-detail">
      <Link to="/" className="back-link"> 🚪 بازگشت به فروشگاه </Link>
      
      <div className="detail-content">
        <img src={product.image} alt={product.name} />
        
        <div className="detail-info">
          <h2>{product.name}</h2>
          <p className="category">دسته‌بندی: {product.category}</p>
          <p className="description">{product.description}</p>
          <p className="price">{product.price.toLocaleString('fa-IR')} تومان</p>
          <ButtonAddCart quantity={2} onClick={() => addToCart(product)} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
