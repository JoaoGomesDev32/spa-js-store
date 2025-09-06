import { createContext, useContext, useMemo, useState, useEffect } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
	const [items, setItems] = useState(() => {
		const saved = localStorage.getItem("cart-items");
		return saved ? JSON.parse(saved) : [];
	});
	const [isOpen, setIsOpen] = useState(false);

	// Persist cart to localStorage whenever items change
	useEffect(() => {
		localStorage.setItem("cart-items", JSON.stringify(items));
	}, [items]);

	function addItem(product, quantity = 1) {
		setItems((prev) => {
			const existing = prev.find((i) => i.id === product.id);
			if (existing) {
				return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + quantity } : i));
			}
			return [...prev, { ...product, qty: quantity }];
		});
	}

	function removeItem(productId) {
		setItems((prev) => prev.filter((i) => i.id !== productId));
	}

	function clearCart() {
		setItems([]);
	}

	function setQuantity(productId, quantity) {
		setItems((prev) =>
			prev.map((i) => (i.id === productId ? { ...i, qty: Math.max(1, quantity) } : i))
		);
	}

	const totals = useMemo(() => {
		const totalItems = items.reduce((sum, i) => sum + i.qty, 0);
		const totalPrice = items.reduce((sum, i) => sum + i.qty * i.price * (1 - (i.discount || 0) / 100), 0);
		return {
			totalItems,
			totalPrice,
		};
	}, [items]);

	const value = useMemo(
		() => ({
			items,
			isOpen,
			openCart: () => setIsOpen(true),
			closeCart: () => setIsOpen(false),
			addItem,
			removeItem,
			clearCart,
			setQuantity,
			...totals,
		}),
		[items, isOpen, totals]
	);

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
	const ctx = useContext(CartContext);
	if (!ctx) throw new Error("useCart deve ser usado dentro de CartProvider");
	return ctx;
}


