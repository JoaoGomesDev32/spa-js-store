import styled from "styled-components";

export const ProductGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
  padding: 1rem;
  max-width: 1200px;
  margin: 1rem auto;
`;

export const ProductCard = styled.article`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme?.colors?.surface || '#fff'};
  border-radius: 0.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  overflow: hidden;
`;

export const ProductImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.75rem 0.75rem 1rem;
`;

export const ProductTitle = styled.h3`
  font-size: 1rem;
  line-height: 1.3;
  font-weight: 700;
  min-height: 2.6rem;
`;

export const ProductMeta = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;

  strong {
    font-size: 1.1rem;
    color: #111;
  }

  s {
    color: #a1a1a1;
    font-size: 0.9rem;
  }
`;

export const AddButton = styled.button`
  margin-top: 0.5rem;
  background-color: #0bade3;
  border: none;
  outline: none;
  font-size: 0.95rem;
  padding: 0.6rem 0.8rem;
  color: #fff;
  transition: background-color 0.2s ease-in-out, transform 0.05s ease-in-out;
  cursor: pointer;
  border-radius: 0.35rem;
  font-family: Roboto, arial;
  font-weight: 600;
  letter-spacing: 0.02rem;
  text-transform: none;

  &:hover {
    background-color: #0a86af;
  }

  &:active {
    transform: translateY(1px);
  }
`;


