import styled from "styled-components";

export const UnitLi = styled.li`
  border-radius: 20px;
  background-color: lightgray;
  padding: 10px;
  font-weight: bold;
  transition: 0.5s;
  &:hover {
    background-color: #9b9b9b;
  }
`;

interface InnerUlProps {
  readonly isActive: boolean;
  readonly items: number;
}

export const InnerUl = styled.ul<InnerUlProps>`
  font-size: 1rem;
  list-style: none;

  max-height: ${({ isActive, items }) => (isActive ? `${items * 3}em` : "0")};

  overflow: hidden;
  transition: 0.6s;
  margin: 10px;
  padding: 0 5px;

  @media (min-width: 700px) {
    font-size: 1.5rem;
  }

  li {
    padding: 5px 10px;
    margin: 5px;
    transition: 0.6s;
    background-color: #8f8e8e;
    &:hover {
      background-color: #a9a8a8;
    }
  }
`;
