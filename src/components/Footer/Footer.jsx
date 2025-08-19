import styled from "styled-components";

const FooterWrap = styled.footer`
  margin-top: 2rem;
  padding: 1.5rem 1rem;
  background: #fff;
  color: #666;
  text-align: center;
  border-top: 1px solid #eee;
`;

export function Footer() {
  const year = new Date().getFullYear();
  return <FooterWrap>© {year} JS Store — Todos os direitos reservados.</FooterWrap>;
}


