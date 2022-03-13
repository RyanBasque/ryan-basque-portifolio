import styled from 'styled-components';

interface HeaderNavProps {
  isPageDefault: boolean;
}

export const HeaderNav = styled.div<HeaderNavProps>`
  ${({ isPageDefault }) => !isPageDefault ? `
    @media(max-width: 750px) {
      display: none;
    }
  ` : `
    margin-top: 10px;

    ul {
      justify-content: flex-end;
    }
  `
  }

  ul {
      list-style: none;

      display: flex;

      a {
          margin: 0 10px;

          text-decoration: none;

          svg {
              width: 1.6em;
              height: 1.6em;
          }
      }
  }
`;