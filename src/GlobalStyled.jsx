import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200;0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;0,6..72,800;1,6..72,200;1,6..72,300;1,6..72,400;1,6..72,500;1,6..72,600;1,6..72,700;1,6..72,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

  * {
    margin: 0;
    padding: 0;
    font-family: Newsreader, Arial;
    box-sizing: border-box;
  }

  html {
    width: auto;
    scroll-behavior: smooth;
  }

  body {
    max-width: 100vw;
    min-height: 100vh;
    background-color: ${({ theme }) => theme?.colors?.background || '#f5f5f5'};
    color: ${({ theme }) => theme?.colors?.text || '#222'};
  }

  :root {
    --rating-color: ${({ theme }) => theme?.colors?.rating || '#f6b100'};
    --text-secondary: ${({ theme }) => theme?.colors?.textSecondary || '#666'};
    --text-muted: ${({ theme }) => theme?.colors?.textMuted || '#999'};
  }
`;
