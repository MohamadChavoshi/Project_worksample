import { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import SearchBar from "../ui/Search";
import Logo from "../../assets/images/Logo/HamtaLogo.png";

function Header({ cart, setCart }) {
  const [isScrolled, setIsScrolled] = useState(false);

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <img src={Logo} width={180} height={50} alt="LogoHamta" />

      <SearchBar />

      <Cart cart={cart} removeFromCart={removeFromCart} />
    </header>
  );
}

export default Header;