import styled from 'styled-components';
import { useState, useEffect } from 'react';

export const CategoryFilter = ({ categories, selectedCategories = [], onFilterChange }) => {
  const [localSelected, setLocalSelected] = useState(selectedCategories);
  const [isOpen, setIsOpen] = useState(false);

  // همگام‌سازی با prop که از URL می‌آید
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLocalSelected(selectedCategories);
  }, [selectedCategories]);

  const handleCategoryToggle = (category) => {
    let updatedCategories;
    
    if (localSelected.includes(category)) {
      updatedCategories = localSelected.filter(cat => cat !== category);
    } else {
      updatedCategories = [...localSelected, category];
    }
    
    setLocalSelected(updatedCategories);
    onFilterChange(updatedCategories);
  };

  const handleRemoveCategory = (category) => {
    const updatedCategories = localSelected.filter(cat => cat !== category);
    setLocalSelected(updatedCategories);
    onFilterChange(updatedCategories);
  };

  return (
    <StyledWrapper>
      <div className="filter-group">
        <label>دسته‌بندی:</label>
        
        <div className="dropdown-container">
          <button 
            className="dropdown-button"
            onClick={() => setIsOpen(!isOpen)}
            type="button"
          >
            {localSelected.length > 0 
              ? `${localSelected.length} دسته انتخاب شده` 
              : 'انتخاب دسته‌بندی'}
            <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
          </button>

          {isOpen && (
            <div className="dropdown-menu">
              {categories.map(cat => (
                <label key={cat} className="dropdown-item">
                  <input
                    type="checkbox"
                    checked={localSelected.includes(cat)}
                    onChange={() => handleCategoryToggle(cat)}
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {localSelected.length > 0 && (
          <div className="chips-container">
            {localSelected.map(cat => (
              <div key={cat} className="chip">
                <span>{cat}</span>
                <button 
                  className="chip-remove"
                  onClick={() => handleRemoveCategory(cat)}
                  type="button"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  direction: rtl;

  .filter-group {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  label {
    font-weight: 600;
    font-size: 14px;
    color: #333;
  }

  .dropdown-container {
    position: relative;
    width: 100%;
  }

  .dropdown-button {
    width: 100%;
    padding: 10px 16px;
    background: white;
    border: 1px solid #C6CACE;
    border-radius: 8px;
    font-size: 14px;
    text-align: right;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.2s;
  }

  .dropdown-button:hover {
    border-color: rgba(209, 79, 79, 0.5);
  }

  .arrow {
    transition: transform 0.2s;
    font-size: 12px;
    color: #666;
  }

  .arrow.open {
    transform: rotate(180deg);
  }

  .dropdown-menu {
    position: absolute;
    top: calc(100% + 4px);
    right: 0;
    width: 100%;
    background: white;
    border: 1px solid #C6CACE;
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    max-height: 250px;
    overflow-y: auto;
    z-index: 1000;
  }

  .dropdown-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 16px;
    cursor: pointer;
    transition: background 0.2s;
  }

  .dropdown-item:hover {
    background: #f5f5f5;
  }

  .dropdown-item input[type="checkbox"] {
    cursor: pointer;
    width: 16px;
    height: 16px;
  }

  .dropdown-item span {
    font-size: 14px;
    color: #333;
  }

  .chips-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    max-width: 200px;
  }

  .chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    background: rgba(209, 79, 79, 0.1);
    border: 1px solid rgba(209, 79, 79, 0.3);
    border-radius: 16px;
    font-size: 13px;
    color: rgba(209, 79, 79, 0.92);
    white-space: nowrap;
  }

  .chip-remove {
    background: none;
    border: none;
    color: rgba(209, 79, 79, 0.92);
    font-size: 20px;
    line-height: 1;
    cursor: pointer;
    padding: 0;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;
  }

  .chip-remove:hover {
    transform: scale(1.2);
  }
`;

export default CategoryFilter;
