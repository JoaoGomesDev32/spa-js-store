import styled from "styled-components";

const FooterWrap = styled.footer`
  margin-top: 2rem;
  padding: 1.5rem 1rem;
  background: ${({ theme }) => theme?.colors?.surface || '#fff'};
  color: ${({ theme }) => theme?.colors?.textSecondary || '#666'};
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme?.colors?.border || '#eee'};
`;

export function Footer() {
  const year = new Date().getFullYear();
  return <FooterWrap>© {year} JS Store — Todos os direitos reservados.</FooterWrap>;
}


