import {
  AddButton,
  PriceRow,
  ProductBody,
  ProductCard,
  ProductImageWrapper,
  ProductMeta,
  ProductTitle,
} from "./CardStyle";

export function Card({ product, onAdd, onOpen }) {
  const hasDiscount = product.discount && product.discount > 0;
  const discountedPrice = hasDiscount
    ? (product.price * (1 - product.discount / 100)).toFixed(2)
    : product.price.toFixed(2);

  return (
    <ProductCard>
      <ProductImageWrapper onClick={() => onOpen?.()} style={{ cursor: "pointer" }}>
        <img src={product.image} alt={product.title} />
      </ProductImageWrapper>
      <ProductBody>
        <ProductTitle title={product.title} onClick={() => onOpen?.()} style={{ cursor: "pointer" }}>{product.title}</ProductTitle>
        <ProductMeta>
          {product.brand} • {product.category}
        </ProductMeta>
        <ProductMeta style={{ minHeight: "2.7rem" }}>
          {product.description}
        </ProductMeta>
        <PriceRow>
          <strong>R$ {discountedPrice}</strong>
          {hasDiscount && <s>R$ {product.price.toFixed(2)}</s>}
        </PriceRow>
        <ProductMeta>
          <i className="bi bi-star-fill" style={{ color: "#f6b100" }}></i> {product.rating} • Estoque: {product.stock}
        </ProductMeta>
        <AddButton onClick={() => onAdd?.(product)}>
          <i className="bi bi-bag-plus" style={{ marginRight: "0.4rem" }}></i>
          Adicionar ao carrinho
        </AddButton>
      </ProductBody>
    </ProductCard>
  );
}
