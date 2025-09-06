import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Products } from "../../Datas";
import styled from "styled-components";
import { useCart } from "../../context/CartContext";

const Wrap = styled.section`
	max-width: 1100px;
	margin: 1rem auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1.5rem;
	padding: 0 1rem;

	@media (max-width: 860px) {
		grid-template-columns: 1fr;
	}
`;

const Image = styled.img`
  width: 100%;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme?.colors?.surface || '#fff'};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Box = styled.div`
  background: ${({ theme }) => theme?.colors?.surface || '#fff'};
  border-radius: 0.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 1rem;
  color: ${({ theme }) => theme?.colors?.text || '#222'};
`;

const Button = styled.button`
	margin-top: 0.75rem;
	background-color: #0bade3;
	border: none;
	outline: none;
	font-size: 1rem;
	padding: 0.8rem 1rem;
	color: #fff;
	cursor: pointer;
	border-radius: 0.4rem;
	font-family: Roboto, arial;
	font-weight: 700;
`;

export default function Product() {
	const params = useParams();
	const { addItem, openCart } = useCart();
	const productId = Number(params.id);

	const product = useMemo(() => Products.find((p) => p.id === productId), [productId]);
	if (!product) return <div style={{ padding: "1rem" }}>Produto não encontrado.</div>;

	const hasDiscount = product.discount && product.discount > 0;
	const discountedPrice = hasDiscount
		? (product.price * (1 - product.discount / 100)).toFixed(2)
		: product.price.toFixed(2);

	function handleBuy() {
		addItem(product, 1);
		openCart();
	}

	return (
		<Wrap>
			<Image src={product.image} alt={product.title} />
			<Box>
				<h2>{product.title}</h2>
				<p style={{ color: "var(--text-secondary)", margin: ".3rem 0 .8rem" }}>
					{product.brand} • {product.category}
				</p>
				<p style={{ marginBottom: ".8rem" }}>{product.description}</p>
				<div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
					<strong style={{ fontSize: "1.4rem" }}>R$ {discountedPrice}</strong>
					{hasDiscount && <s style={{ color: "var(--text-muted)" }}>R$ {product.price.toFixed(2)}</s>}
				</div>
				<Button onClick={handleBuy}>
					<i className="bi bi-bag-plus" style={{ marginRight: ".4rem" }}></i>
					Adicionar ao carrinho
				</Button>
			</Box>
		</Wrap>
	);
}


