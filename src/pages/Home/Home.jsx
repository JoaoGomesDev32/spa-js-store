import { useMemo, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Card } from "../../components/Card/Card";
import { Products } from "../../Datas";
import { ProductGrid } from "../../components/Card/CardStyle";
import { Footer } from "../../components/Footer/Footer";

export default function Home() {
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState([]);

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
    setCart((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }

  return (
    <>
      <Navbar query={query} onQueryChange={setQuery} cartCount={cart.length} />
      <ProductGrid>
        {filteredProducts.map((item) => (
          <Card key={item.id} product={item} onAdd={handleAddToCart} />
        ))}
      </ProductGrid>
      <Footer />
    </>
  );
}
