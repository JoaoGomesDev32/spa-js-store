import { Outlet, useLocation } from "react-router-dom";
import { useMemo, useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { CartDrawer } from "../components/Cart/CartDrawer";
import { useCart } from "../context/CartContext";
import "bootstrap-icons/font/bootstrap-icons.css";
import { GlobalStyled } from "../GlobalStyled.jsx";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../theme";

export default function Layout() {
	const { openCart, totalItems } = useCart();
	const [query, setQuery] = useState("");
	const location = useLocation();

	// Limpa a busca ao trocar de rota
	useMemo(() => {
		setQuery("");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location.pathname]);

	const [mode, setMode] = useState("light");
	const theme = mode === "dark" ? darkTheme : lightTheme;

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyled />
			<Navbar
				query={query}
				onQueryChange={setQuery}
				cartCount={totalItems}
				onOpenCart={openCart}
				mode={mode}
				onToggleMode={() => setMode((m) => (m === "dark" ? "light" : "dark"))}
			/>
			<Outlet context={{ query, setQuery }} />
			<CartDrawer />
			<Footer />
		</ThemeProvider>
	);
}


