import styled from 'styled-components';
import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import CategoryFilter from '../../components/ui/CategoryFilter';
import PriceRange from '../../components/ui/PriceRange';

export const Filter = ({ products, onFilter }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [maxPrice, setMaxPrice] = useState(20000000);

  // استخراج دسته‌بندی‌های یونیک از محصولات
  const availableCategories = useMemo(() => {
    if (!products || products.length === 0) return [];
    const categories = [...new Set(products.map(p => p.category))];
    return categories;
  }, [products]);

  // خواندن فیلترها از URL فقط یک بار در ابتدا
  useEffect(() => {
    const categoriesParam = searchParams.get('categories');
    const maxPriceParam = searchParams.get('maxPrice');

    if (categoriesParam || maxPriceParam) {
      const categories = categoriesParam ? categoriesParam.split(',') : [];
      const price = maxPriceParam ? parseInt(maxPriceParam) : 20000000;

      setSelectedCategories(categories);
      setMaxPrice(price);

      onFilter({
        categories,
        maxPrice: price
      });
    }
  }, [searchParams]);

  const handleApplyFilters = () => {
    const params = {};
    
    if (selectedCategories.length > 0) {
      params.categories = selectedCategories.join(',');
    }
    
    // فقط اگر maxPrice از مقدار پیش‌فرض متفاوت باشد
    if (maxPrice !== 20000000) {
      params.maxPrice = maxPrice.toString();
    }
    
    setSearchParams(params);
    
    onFilter({
      categories: selectedCategories,
      maxPrice: maxPrice
    });
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setMaxPrice(20000000);
    setSearchParams({});
    
    onFilter({
      categories: [],
      maxPrice: 20000000
    });
  };

  const handleCategoryChange = (categories) => {
    setSelectedCategories(categories);
  };

  const handlePriceChange = (newPrice) => {
    console.log('Price changed to:', newPrice);
    setMaxPrice(newPrice);
  };

  return (
    <StyledWrapper>
      <FilterContainer>
        <FilterTitle>فیلترها</FilterTitle>
        
        <FilterSection>
          <SectionTitle>دسته‌بندی</SectionTitle>
          <CategoryFilter 
            categories={availableCategories}
            selectedCategories={selectedCategories}
            onFilterChange={handleCategoryChange}
          />
        </FilterSection>

        <FilterSection>
          <SectionTitle>محدوده قیمت</SectionTitle>
          <PriceRange 
            value={maxPrice}
            onChange={handlePriceChange}
          />
        </FilterSection>

        <ButtonGroup>
          <ApplyButton onClick={handleApplyFilters}>
            اعمال فیلترها
          </ApplyButton>
          <ClearButton onClick={handleClearFilters}>
            پاک کردن فیلترها
          </ClearButton>
        </ButtonGroup>
      </FilterContainer>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  direction: rtl;
`;

const FilterContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 20px;
`;

const FilterTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #333;
`;

const FilterSection = styled.div`
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;

  &:last-of-type {
    border-bottom: none;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #555;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;
`;

const ApplyButton = styled.button`
  background: rgba(209, 79, 79, 0.92);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(209, 79, 79, 1);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(209, 79, 79, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ClearButton = styled.button`
  background: white;
  color: rgba(209, 79, 79, 0.92);
  border: 2px solid rgba(209, 79, 79, 0.92);
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(209, 79, 79, 0.1);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export default Filter;
