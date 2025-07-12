import logo from "../../images/logo.png";
import { Button, ImageLogo, InputSpace, Nav } from "./NavbarStyled";

export function Navbar() {
  return (
    <>
      <Nav>
        <InputSpace>
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Pesquise um produto" />
        </InputSpace>
        <ImageLogo src={logo} alt="Logo JS Store" />
        <Button>Entrar</Button>
      </Nav>
    </>
  );
}
