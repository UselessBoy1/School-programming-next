import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
  overflow: hidden;
`;

export const ContainerUl = styled.ul`
  opacity: 0.8;
  background-color: grey;
  border-radius: 20px;
  list-style: none;
  padding: 30px 10px 10px 10px;
  width: 350px;
  font-size: 1.3rem;
  overflow-y: scroll;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 700px) {
    width: 700px;
    font-size: 2rem;
  }
`;

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
