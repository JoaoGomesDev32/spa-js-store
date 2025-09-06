import styled from "styled-components";
import { useCart } from "../../context/CartContext";

const Backdrop = styled.div`
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.35);
	z-index: 20;
`;

const Drawer = styled.aside`
	position: fixed;
	top: 0;
	right: 0;
	width: min(92vw, 380px);
	height: 100vh;
	background: ${({ theme }) => theme?.colors?.surface || '#fff'};
	box-shadow: rgba(0, 0, 111, 0.2) 0px 7px 29px 0px;
	z-index: 30;
	display: flex;
	flex-direction: column;
	color: ${({ theme }) => theme?.colors?.text || '#222'};
`;

const Header = styled.div`
	padding: 1rem;
	border-bottom: 1px solid ${({ theme }) => theme?.colors?.border || '#eee'};
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: ${({ theme }) => theme?.colors?.text || '#222'};
`;

const Content = styled.div`
	flex: 1;
	overflow: auto;
	padding: 0.75rem 1rem;
`;

const Footer = styled.div`
	padding: 1rem;
	border-top: 1px solid ${({ theme }) => theme?.colors?.border || '#eee'};
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	color: ${({ theme }) => theme?.colors?.text || '#222'};
`;

const Row = styled.div`
	display: flex;
	gap: 0.75rem;
	align-items: center;
	padding: 0.5rem 0;
	border-bottom: 1px dashed ${({ theme }) => theme?.colors?.border || '#f0f0f0'};
	color: ${({ theme }) => theme?.colors?.text || '#222'};
`;

const Thumb = styled.img`
	width: 56px;
	height: 56px;
	object-fit: cover;
	border-radius: 0.35rem;
	background: ${({ theme }) => theme?.colors?.background || '#fafafa'};
`;

const QtyInput = styled.input`
	width: 54px;
	padding: 0.4rem 0.3rem;
	border-radius: 0.35rem;
	border: 1px solid ${({ theme }) => theme?.colors?.border || '#ddd'};
	background: ${({ theme }) => theme?.colors?.surface || '#fff'};
	color: ${({ theme }) => theme?.colors?.text || '#222'};
	text-align: center;
`;

const Button = styled.button`
	background-color: ${({ theme }) => theme?.colors?.primary || '#0bade3'};
	border: none;
	outline: none;
	font-size: 1rem;
	padding: 0.6rem 0.8rem;
	color: #fff;
	transition: background-color 0.2s ease-in-out;
	cursor: pointer;
	border-radius: 0.35rem;
	font-family: Roboto, arial;
	font-weight: 600;
	letter-spacing: 0.02rem;
`;

const Secondary = styled(Button)`
	background: ${({ theme }) => theme?.colors?.background || '#f2f2f2'};
	color: ${({ theme }) => theme?.colors?.text || '#333'};
`;

export function CartDrawer() {
	const { isOpen, closeCart, items, setQuantity, removeItem, clearCart, totalPrice } = useCart();
	if (!isOpen) return null;

	return (
		<>
			<Backdrop onClick={closeCart} />
			<Drawer>
				<Header>
					<strong>Carrinho</strong>
					<button onClick={closeCart} style={{ background: "transparent", border: "none", fontSize: "1.2rem", cursor: "pointer" }}>
						<i className="bi bi-x-lg"></i>
					</button>
				</Header>
				<Content>
					{items.length === 0 ? (
						<p>Seu carrinho está vazio.</p>
					) : (
						items.map((item) => (
							<Row key={item.id}>
								<Thumb src={item.image} alt={item.title} />
								<div style={{ flex: 1 }}>
									<div style={{ fontWeight: 600 }}>{item.title}</div>
								<div style={{ color: "var(--text-secondary)", fontSize: ".92rem" }}>
									R$ {(item.price * (1 - (item.discount || 0) / 100)).toFixed(2)}
								</div>
								</div>
								<div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
									<QtyInput
										type="number"
										min={1}
										value={item.qty}
										onChange={(e) => setQuantity(item.id, Number(e.target.value) || 1)}
									/>
									<button onClick={() => removeItem(item.id)} style={{ background: "transparent", border: "none", color: "#c33", cursor: "pointer" }}>
										<i className="bi bi-trash3"></i>
									</button>
								</div>
							</Row>
						))
					)}
				</Content>
				<Footer>
					<div style={{ display: "flex", justifyContent: "space-between", marginBottom: ".25rem" }}>
						<span>Total</span>
						<strong>R$ {totalPrice.toFixed(2)}</strong>
					</div>
					<div style={{ display: "flex", gap: ".5rem" }}>
						<Secondary onClick={clearCart}>
							Limpar
						</Secondary>
						<Button>
							Finalizar compra
						</Button>
					</div>
				</Footer>
			</Drawer>
		</>
	);
}


