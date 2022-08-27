import styled from "styled-components";

interface ArrowProps {
  readonly isVertical?: boolean;
}

export const Arrow = styled.div<ArrowProps>`
  opacity: 0.8;
  position: absolute;
  top: ${({ isVertical }) => (isVertical ? "30px" : "50px")};
  left: ${({ isVertical }) => (isVertical ? "40%" : "5%")};
  width: 30px;
  height: 30px;
  background: transparent;
  border-radius: 5px;
  border-top: 10px solid black;
  border-right: 10px solid black;
  box-shadow: 0 0 0 lightgray;
  transition: all 200ms ease;
  transform: ${({ isVertical }) =>
    isVertical
      ? "translate3d(-30%, -20%, 0) rotate(-45deg);"
      : "translate3d(0, -50%, 0) rotate(-135deg);"};
  &:hover {
    border-color: #1a1a1a;
    box-shadow: 8px -8px 0 #302f2f;
  }

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -60%) rotate(45deg);
    width: 200%;
    height: 200%;
  }
`;