import styled from "styled-components";

export const Bar = styled.div`
	max-width: 1200px;
	margin: 0.5rem auto 0;
	padding: 0 1rem;
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));
	gap: 0.5rem;

	@media (max-width: 760px) {
		grid-template-columns: 1fr 1fr;
	}
`;

const Input = styled.input`
	padding: 0.55rem 0.6rem;
	border-radius: 0.35rem;
	border: 1px solid ${({ theme }) => theme?.colors?.border || '#eee'};
	background: ${({ theme }) => theme?.colors?.surface || '#fff'};
	color: inherit;
`;

const Select = styled.select`
	padding: 0.55rem 0.6rem;
	border-radius: 0.35rem;
	border: 1px solid ${({ theme }) => theme?.colors?.border || '#eee'};
	background: ${({ theme }) => theme?.colors?.surface || '#fff'};
	color: inherit;
`;

export function Filters({ category, onCategory, minPrice, onMinPrice, maxPrice, onMaxPrice, sort, onSort, categories }) {
	return (
		<Bar>
			<Select value={category} onChange={(e) => onCategory(e.target.value)}>
				<option value="">Todas as categorias</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>{cat}</option>
				))}
			</Select>
			<Input type="number" placeholder="Preço mín." value={minPrice} onChange={(e) => onMinPrice(e.target.value)} />
			<Input type="number" placeholder="Preço máx." value={maxPrice} onChange={(e) => onMaxPrice(e.target.value)} />
			<Select value={sort} onChange={(e) => onSort(e.target.value)}>
				<option value="">Ordenar</option>
				<option value="price-asc">Preço: menor para maior</option>
				<option value="price-desc">Preço: maior para menor</option>
				<option value="rating-desc">Avaliação: maior</option>
				<option value="discount-desc">Desconto: maior</option>
			</Select>
		</Bar>
	);
}


