import { useState, useEffect } from 'react';
import styled from 'styled-components';

export const PriceRange = ({ value, onChange }) => {
  const [sliderValue, setSliderValue] = useState(50);

  // تبدیل قیمت به مقدار slider
  const priceToSlider = (price) => {
    if (price <= 1000000) {
      return Math.floor((price - 100000) / 50000);
    } else if (price <= 5000000) {
      return 20 + Math.floor((price - 1000000) / 150000);
    } else if (price <= 20000000) {
      return 50 + Math.floor((price - 5000000) / 500000);
    } else {
      return 80 + Math.floor((price - 20000000) / 44000000);
    }
  };

  // تبدیل مقدار slider به قیمت
  const sliderToPrice = (val) => {
    if (val <= 20) {
      return 100000 + (val * 50000);
    } else if (val <= 50) {
      return 1000000 + ((val - 20) * 150000);
    } else if (val <= 80) {
      return 5000000 + ((val - 50) * 500000);
    } else {
      return 20000000 + ((val - 80) * 2200000);
    }
  };

  // همگام‌سازی با prop از URL
  useEffect(() => {
    if (value !== undefined) {
      const sliderVal = priceToSlider(value);
      setSliderValue(sliderVal);
    }
  }, [value]); // فقط value در dependency

  const handleChange = (e) => {
    const newSliderValue = parseInt(e.target.value);
    setSliderValue(newSliderValue);
    
    const newPrice = sliderToPrice(newSliderValue);
    onChange(newPrice);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  return (
    <Container>
      <PriceDisplay>
        حداکثر: {formatPrice(sliderToPrice(sliderValue))} تومان
      </PriceDisplay>
      <SliderInput
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleChange}
      />
      <PriceLabels>
        <span>۱۰۰ هزار</span>
        <span>۶۴ میلیون</span>
      </PriceLabels>
    </Container>
  );
};

// استایل‌ها بدون تغییر...
const Container = styled.div`
  width: 100%;
`;

const PriceDisplay = styled.div`
  font-size: 0.95rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const SliderInput = styled.input`
  width: 100%;
  height: 6px;
  border-radius: 5px;
  background: linear-gradient(to right, #e0e0e0 0%, rgba(209, 79, 79, 0.92) 100%);
  outline: none;
  -webkit-appearance: none;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: rgba(209, 79, 79, 0.92);
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease;
    
    &:hover {
      transform: scale(1.2);
      box-shadow: 0 3px 6px rgba(209, 79, 79, 0.4);
    }
  }
  
  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: rgba(209, 79, 79, 0.92);
    cursor: pointer;
    border: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease;
    
    &:hover {
      transform: scale(1.2);
      box-shadow: 0 3px 6px rgba(209, 79, 79, 0.4);
    }
  }
`;

const PriceLabels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: #888;
`;

export default PriceRange;
