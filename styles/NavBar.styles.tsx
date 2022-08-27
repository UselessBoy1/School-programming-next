import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  padding: 5px;
  text-align: center;
  color: #d3d3d3;
  @media (min-width: 700px) {
    font-size: 1.8rem;
  }
  h1 {
    margin: 0 35px;
  }
`;