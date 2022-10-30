import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.main`
  position: relative;
  transition: 0.5s;
  border-radius: 10px;
  width: 95%;
  height: 75vh;
  overflow: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  mask-image: radial-gradient(white, black);
  @media (min-width: 800px) {
    width: 900px;
    height: 800px;
  }
`;

export const Description = styled.section`
  opacity: 0.8;
  background-color: grey;
  font-size: 1rem;
  @media (min-width: 700px) {
    font-size: 1.5rem;
  }
  margin-bottom: 10px;
  border-radius: 10px;
  div {
    padding: 10px;
  }
  p {
    padding: 5px;
    margin: 5px;
  }
`;

export const CodeWrapper = styled.section`
  opacity: 0.95;
  position: relative;
  code {
    transition: 0.5s;
    font-size: 0.7rem;
  }
  @media (min-width: 700px) {
    code {
      font-size: 1.2rem;
    }
  }
  background-color: rgb(40, 44, 52);
  padding: 10px 20px;
  border-radius: 10px;
  user-select: text;
`;

interface CopyButtonProps {
  readonly isCopied: boolean;
}

export const CopyButton = styled.div<CopyButtonProps>`
  position: absolute;
  top: 15px;
  right: 15px;
  opacity: 0.8;
  padding: 12px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 0.9rem;
  @media (min-width: 700px) {
    font-size: 1.5rem;
  }
  box-shadow: 1px 1px 1px 1px rgba(255, 255, 255, 0.2);
  background-color: ${({ isCopied }) => (isCopied ? "#757373e9" : "#e9e9e9")};
  transition: all 0.4s;
  &:hover {
    background-color: ${({ isCopied }) =>
      isCopied ? "#757373e9" : "#a2a2a2e9"};
  }
`;

export const ScrollButton = styled.div`
  position: sticky;
  bottom: 16%;
  left: 80%;
  width: 30px;
  height: 30px;
`;

const ArrowAnimation = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

interface ArrowWrapperProps {
  isGone: boolean;
}

export const ArrowWrapper = styled.div<ArrowWrapperProps>`
  position: absolute;
  top: 22px;
  left: 3%;
  background-color: #595959;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  transition: all 1s ease-in-out;
  opacity: ${({ isGone }) => (isGone ? "0" : "0.7")};
  animation: ${ArrowAnimation} 1s ease-in-out;
`;
