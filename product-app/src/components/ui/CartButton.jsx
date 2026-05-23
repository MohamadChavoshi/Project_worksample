import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';

export const CartButton = ({ CartLength, cartItems = [], onRemoveItem }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // بستن dropdown با کلیک خارج از آن
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <StyledWrapper ref={dropdownRef}>
      <button 
        data-quantity={CartLength} 
        className="btn-cart"
        onClick={handleToggleDropdown}
      >
        <svg className="icon-cart" viewBox="0 0 24.38 30.52" height="30.52" width="24.38" xmlns="http://www.w3.org/2000/svg">
          <title>icon-cart</title>
          <path transform="translate(-3.62 -0.85)" d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0" />
        </svg>
        <span className="quantity" />
      </button>

      {isDropdownOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-header">
            <h3>سبد خرید</h3>
          </div>
          
          <div className="cart-items">
            {cartItems.length === 0 ? (
              <p className="empty-cart">سبد خرید شما خالی است</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p>تعداد: {item.quantity}</p>
                    <p className="price">{(item.price * item.quantity).toLocaleString('fa-IR')} تومان</p>
                  </div>
                  <button 
                    className="remove-btn" 
                    onClick={() => onRemoveItem(item.id)}
                    title="حذف از سبد"
                  >
                    ✕
                  </button>
                </div>
              ))
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="dropdown-footer">
              <div className="total">
                <span>جمع کل:</span>
                <span className="total-price">
                  {totalPrice.toLocaleString('fa-IR')} تومان
                </span>
              </div>
              <button className="checkout-btn">تکمیل خرید</button>
            </div>
          )}
        </div>
      )}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: relative;

  .btn-cart {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: transparent;
    position: relative;
    cursor: pointer;
  }

  .btn-cart::after {
    content: attr(data-quantity);
    width: fit-content;
    height: fit-content;
    position: absolute;
    font-size: 15px;
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    opacity: 0;
    visibility: hidden;
    transition: .2s linear;
    top: 115%;
  }

  .icon-cart {
    width: 24.38px;
    height: 30.52px;
    transition: .2s linear;
  }

  .icon-cart path {
    fill: rgb(240, 8, 8);
    transition: .2s linear;
  }

  .btn-cart:hover > .icon-cart {
    transform: scale(1.2);
  }

  .btn-cart:hover > .icon-cart path {
    fill: rgb(186, 34, 233);
  }

  .btn-cart:hover::after {
    visibility: visible;
    opacity: 1;
    top: 105%;
  }

  .quantity {
    display: none;
  }

  .dropdown-menu {
    position: absolute;
    top: calc(100% + 10px);
    right: 0;
    background: white;
    border-radius: 15px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    width: 380px;
    max-height: 500px;
    overflow: hidden;
    z-index: 1000;
    animation: slideDown 0.3s ease-out;
    direction: rtl;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .dropdown-header {
    padding: 15px 20px;
    border-bottom: 2px solid #f0f0f0;
    background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  }

  .dropdown-header h3 {
    margin: 0;
    font-size: 18px;
    color: #333;
    text-align: center;
  }

  .cart-items {
    max-height: 300px;
    overflow-y: auto;
    padding: 10px;
  }

  .cart-items::-webkit-scrollbar {
    width: 6px;
  }

  .cart-items::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  .cart-items::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  .cart-items::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .empty-cart {
    text-align: center;
    color: #999;
    padding: 40px 20px;
    font-size: 16px;
  }

  .cart-item {
    display: flex;
    gap: 12px;
    padding: 12px;
    background: #f9f9f9;
    border-radius: 10px;
    margin-bottom: 10px;
    transition: all 0.2s;
    align-items: center;
  }

  .cart-item:hover {
    background: #f0f0f0;
    transform: translateX(-3px);
  }

  .cart-item img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 8px;
    flex-shrink: 0;
  }

  .item-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
  }

  .item-details h4 {
    margin: 0;
    font-size: 14px;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .item-details p {
    margin: 0;
    font-size: 12px;
    color: #666;
  }

  .price {
    color: rgb(240, 8, 8) !important;
    font-weight: bold;
    font-size: 13px !important;
  }

  .remove-btn {
    background: transparent;
    border: none;
    font-size: 18px;
    cursor: pointer;
    padding: 6px;
    border-radius: 6px;
    transition: all 0.2s;
    opacity: 0.5;
    color: #666;
    flex-shrink: 0;
  }

  .remove-btn:hover {
    background: #ffe0e0;
    opacity: 1;
    color: rgb(240, 8, 8);
  }

  .dropdown-footer {
    border-top: 2px solid #f0f0f0;
    padding: 15px 20px;
    background: #fafafa;
  }

  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    font-size: 16px;
    font-weight: bold;
  }

  .total-price {
    color: rgb(240, 8, 8);
    font-size: 17px;
  }

  .checkout-btn {
    width: 100%;
    padding: 12px;
    background: linear-gradient(320deg, rgb(204, 54, 44), rgb(223, 68, 8));
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;
  }

  .checkout-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(204, 54, 44, 0.4);
  }

  .checkout-btn:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    .dropdown-menu {
      width: 320px;
      right: -20px;
    }
  }
`;

export default CartButton;
