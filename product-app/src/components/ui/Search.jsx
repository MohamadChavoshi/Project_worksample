import styled from 'styled-components';

export const SearchBar = () => {
  return (
    <StyledWrapper>
      <div className="search-orb-container">
        <div className="input-overlay">
          <input type="text" className="modern-input" placeholder="محصول مورد نظر را جستوجو کنید" />
          <div className="focus-indicator" />
          <div className="search-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="search-icon">
              <circle cx={11} cy={11} r={8} />
              <line x1={21} y1={21} x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .search-orb-container {
    position: relative;
    width: 350px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    font-family:
      "Inter",
      system-ui,
      -apple-system,
      sans-serif;
  }

  .input-overlay {
    dir: RTL;
    position: relative;
    z-index: 10;
    width: 90%;
    height: 52px;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 26px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .modern-input {
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
    color: gray;
    font-size: 15px;
    font-weight: 500;
    padding-left: 12px;
    letter-spacing: 0.02em;
  }

  .modern-input::placeholder {
    color: gray;
    font-weight: 400;
  }

  .search-icon-wrapper {
    color: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.9;
    cursor: pointer;
  }

  .search-icon {
    width: 18px;
    height: 18px;
  }

  .focus-indicator {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0%;
    height: 2px;
    background: white;
    transform: translateX(-50%);
    transition: width 0.4s ease;
    border-radius: 2px;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
  }

  .search-orb-container:focus-within .input-overlay {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  }

  .search-orb-container:focus-within .focus-indicator {
    width: 40%;
  }

  .search-orb-container:focus-within .blob-1 {
    transform: scale(1.15) translateX(-20px);
    filter: brightness(1.2);
  }

  .search-orb-container:focus-within .blob-2 {
    transform: scale(1.15) translateX(20px);
    filter: brightness(1.2);
  }

  @keyframes blob-float {
    0% {
      border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
      transform: translate(0, 0);
    }
    50% {
      border-radius: 60% 40% 50% 50% / 30% 60% 40% 70%;
      transform: translate(5px, -5px);
    }
    100% {
      border-radius: 50% 50% 30% 70% / 60% 40% 60% 40%;
      transform: translate(-5px, 5px);
    }
  }

  .gooey-svg-filter {
    position: absolute;
    width: 0;
    height: 0;
    pointer-events: none;
  }`;

export default SearchBar;
