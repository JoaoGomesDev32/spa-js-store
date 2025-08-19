import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding: 1rem;
  /* position: fixed; */
  /* top: 0; */
  background-color: ${({ theme }) => theme?.colors?.surface || '#fff'};
  z-index: 1;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: sticky;
  top: 0;
`;

export const ImageLogo = styled.img`
  width: 8rem;
  height: 3.5rem;
  object-fit: cover;
  cursor: pointer;
`;

export const InputSpace = styled.div`
  position: relative;
  width: 200px;
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 520px;

  i {
    position: absolute;
    top: 50%;
    right: 0.6rem;
    transform: translateY(-50%);
    z-index: 10;
    border: none;
    background-color: transparent;
    color: #757575;
    border-radius: 0.3rem;
    padding: 0;
    font-size: 1.2rem;
  }

  input {
    outline: none;
    font-size: 1rem;
    padding: 0.6rem 2.2rem 0.6rem 0.6rem;
    background-color: ${({ theme }) => theme?.colors?.background || '#f5f5f5'};
    border: none;
    width: 100%;
    border-radius: 0.3rem;

    &:focus {
      border: 1px solid ${({ theme }) => theme?.colors?.primary || '#0bade3'};
    }
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme?.colors?.primary || '#0bade3'};
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0.4rem;
  color: #fff;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  border-radius: 0.3rem;
  font-family: Roboto, arial;
  /* width: 40%; */
  font-weight: 500;
  letter-spacing: 0.1rem;
  text-transform: uppercase;

  &:hover {
    background-color: #0a86af;
  }
`;

export const CartButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.7rem;
`;

export const ModeToggle = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme?.colors?.border || '#eee'};
  color: inherit;
  border-radius: 0.3rem;
  padding: 0.4rem 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  cursor: pointer;
`;
