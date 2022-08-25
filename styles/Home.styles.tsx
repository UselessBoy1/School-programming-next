import styled from "styled-components";
import BgImg from "../public/clement-helardot-95YRwf6CNw8-unsplash.jpg";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${BgImg.src});
  background-repeat: no-repeat;
  background-size: cover;
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