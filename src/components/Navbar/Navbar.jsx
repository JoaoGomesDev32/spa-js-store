import logo from "../../images/logo.png";
import { CartButton, ImageLogo, InputSpace, Nav, ModeToggle } from "./NavbarStyled";
import { Link } from "react-router-dom";

export function Navbar({ query, onQueryChange, cartCount, onOpenCart, mode, onToggleMode }) {
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
        <Link to="/" style={{ textDecoration: "none" }}>
          <ImageLogo src={logo} alt="Logo JS Store" />
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
          <ModeToggle onClick={onToggleMode} title="Alternar tema">
            {mode === "dark" ? (
              <>
                <i className="bi bi-brightness-high"></i>
                Claro
              </>
            ) : (
              <>
                <i className="bi bi-moon"></i>
                Escuro
              </>
            )}
          </ModeToggle>
          <CartButton onClick={onOpenCart}>
            <i className="bi bi-bag"></i>
            Carrinho ({cartCount || 0})
          </CartButton>
        </div>
      </Nav>
    </>
  );
}
