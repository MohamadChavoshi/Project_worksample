import styled from 'styled-components';
import { useState } from 'react';

export const ButtonAddCart = () => {
  const [quantity, setQuantity] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleAddToCart = () => {
    if (quantity === 0) {
      setQuantity(1);
      setIsOpen(true);
    }
  };

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    } else {
      setQuantity(0);
      setIsOpen(false);
    }
  };

  return (
    <StyledWrapper>
      <div className="cart-container">
        {isOpen && (
          <div className="quantity-control">
            <button className="btn-control" onClick={handleIncrease}>
              +
            </button>
            <span className="quantity-display">{quantity}</span>
            <button className="btn-control" onClick={handleDecrease}>
              −
            </button>
          </div>
        )}
        
        <div className="uiverse" onClick={handleAddToCart}>
          <span className="tooltip">{quantity} 🛒</span>
          <span>افزودن به سبد</span>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .cart-container {
    display: flex;
    align-items: center;
    gap: 10px;
    direction: rtl;
  }

  .quantity-control {
    display: flex;
    align-items: center;
    gap: 8px;
    background: white;
    border: 2px solid rgb(204, 54, 44);
    border-radius: 15px;
    padding: 5px 10px;
    animation: slideIn 0.3s ease-out;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .btn-control {
    width: 28px;
    height: 28px;
    border: none;
    background: linear-gradient(320deg, rgb(204, 54, 44), rgb(223, 68, 8));
    color: white;
    font-size: 18px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
  }

  .btn-control:hover {
    transform: scale(1.1);
    box-shadow: 0 5px 10px rgba(204, 54, 44, 0.3);
  }

  .btn-control:active {
    transform: scale(0.95);
  }

  .quantity-display {
    min-width: 30px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: rgb(204, 54, 44);
  }

  .uiverse {
    position: relative;
    background: #ffffff;
    color: #000;
    padding: 15px;
    margin: 10px;
    border-radius: 20px;
    width: 150px;
    height: 50px;
    font-size: 17px;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .tooltip {
    position: absolute;
    top: 0;
    font-size: 14px;
    background: #ffffff;
    color: #ffffff;
    padding: 5px 8px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .tooltip::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background: #ffffff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .uiverse:hover .tooltip {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  svg:hover span,
  svg:hover .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  }

  .uiverse:hover,
  .uiverse:hover .tooltip,
  .uiverse:hover .tooltip::before {
    background: linear-gradient(320deg, rgb(204, 54, 44), rgb(223, 68, 8));
    color: #ffffff;
  }
`;

export default ButtonAddCart;
