import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/Home/Home.jsx";
import { GlobalStyled } from "./GlobalStyled.jsx";

function App() {
  return (
    <>
      <GlobalStyled />
      <Home />;
    </>
  );
}

export default App;
