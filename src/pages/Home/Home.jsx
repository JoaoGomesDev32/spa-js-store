import { useMemo, useState } from "react";
import { Card } from "../../components/Card/Card";
import { Products } from "../../Datas";
import { ProductGrid } from "../../components/Card/CardStyle";
import { useCart } from "../../context/CartContext";
import { useOutletContext, useNavigate } from "react-router-dom";
import { Filters } from "./Filters";

export default function Home() {
  const navigate = useNavigate();
  const { addItem, totalItems, openCart } = useCart();
  const { query, setQuery } = useOutletContext();
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("");

  const filteredProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    let list = !normalized
      ? [...Products]
      : Products.filter((p) =>
          p.title.toLowerCase().includes(normalized) ||
          p.brand.toLowerCase().includes(normalized) ||
          p.category.toLowerCase().includes(normalized) ||
          p.description.toLowerCase().includes(normalized)
        );

    if (category) list = list.filter((p) => p.category === category);

    const min = Number(minPrice);
    const max = Number(maxPrice);
    if (!Number.isNaN(min) && min > 0) list = list.filter((p) => p.price >= min);
    if (!Number.isNaN(max) && max > 0) list = list.filter((p) => p.price <= max);

    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "rating-desc") list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    if (sort === "discount-desc") list.sort((a, b) => (b.discount || 0) - (a.discount || 0));
    return list;
  }, [query, category, minPrice, maxPrice, sort]);

  const categories = useMemo(() => {
    return Array.from(new Set(Products.map((p) => p.category)));
  }, []);

  function handleAddToCart(product) {
    addItem(product, 1);
  }

  function handleOpenProduct(productId) {
    navigate(`/product/${productId}`);
  }

  return (
    <>
      <Filters
        category={category}
        onCategory={setCategory}
        minPrice={minPrice}
        onMinPrice={setMinPrice}
        maxPrice={maxPrice}
        onMaxPrice={setMaxPrice}
        sort={sort}
        onSort={setSort}
        categories={categories}
      />
      <ProductGrid>
        {filteredProducts.map((item) => (
          <Card key={item.id} product={item} onAdd={handleAddToCart} onOpen={() => handleOpenProduct(item.id)} />
        ))}
      </ProductGrid>
    </>
  );
}
