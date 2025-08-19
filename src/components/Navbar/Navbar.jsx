import logo from "../../images/logo.png";
import { CartButton, ImageLogo, InputSpace, Nav } from "./NavbarStyled";

export function Navbar({ query, onQueryChange, cartCount, onOpenCart }) {
  return (
    <>
      <Nav>
        <InputSpace>
          <i className="bi bi-search"></i>
          <input
            type="text"
            placeholder="Pesquise um produto"
            value={query}
            onChange={(e) => onQueryChange?.(e.target.value)}
          />
        </InputSpace>
        <ImageLogo src={logo} alt="Logo JS Store" />
        <CartButton onClick={onOpenCart}>
          <i className="bi bi-bag"></i>
          Carrinho ({cartCount || 0})
        </CartButton>
      </Nav>
    </>
  );
}
