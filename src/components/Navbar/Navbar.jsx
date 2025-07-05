import logo from "../../images/logo.png";
import "./Navbar.css";

export function Navbar() {
  return (
    <>
      <nav>
        <div className="input-search-space">
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Pesquise um produto" />
        </div>
        <img src={logo} alt="Logo JS Store" />
        <button>Entrar</button>
      </nav>
    </>
  );
}
