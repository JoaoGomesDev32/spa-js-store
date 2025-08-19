import { useMemo } from "react";
import { Card } from "../../components/Card/Card";
import { Products } from "../../Datas";
import { ProductGrid } from "../../components/Card/CardStyle";
import { useCart } from "../../context/CartContext";
import { useOutletContext, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const { addItem, totalItems, openCart } = useCart();
  const { query, setQuery } = useOutletContext();

  const filteredProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return Products;
    return Products.filter((p) => {
      return (
        p.title.toLowerCase().includes(normalized) ||
        p.brand.toLowerCase().includes(normalized) ||
        p.category.toLowerCase().includes(normalized) ||
        p.description.toLowerCase().includes(normalized)
      );
    });
  }, [query]);

  function handleAddToCart(product) {
    addItem(product, 1);
  }

  function handleOpenProduct(productId) {
    navigate(`/product/${productId}`);
  }

  return (
    <>
      <ProductGrid>
        {filteredProducts.map((item) => (
          <Card key={item.id} product={item} onAdd={handleAddToCart} onOpen={() => handleOpenProduct(item.id)} />
        ))}
      </ProductGrid>
    </>
  );
}
