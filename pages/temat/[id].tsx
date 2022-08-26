import { GetStaticPaths, GetStaticProps } from "next";
import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark-reasonable";
import Link from "next/link";
import {
  fetchSubject,
  fetchAllSubjectsNames,
} from "../../database/dbControllers";
import { SubjectData, SubjectName, Unit } from "../../types/types";

const NavBar = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  padding: 5px;
  text-align: center;
  color: #d3d3d3;
  @media (min-width: 700px) {
    font-size: 2rem;
  }
  h1 {
    margin: 0;
  }
`;

interface ArrowProps {
  readonly isVertical?: boolean;
}

const Arrow = styled.div<ArrowProps>`
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.main`
  position: relative;
  transition: 0.5s;
  border-radius: 10px;
  width: 95vw;
  height: 85vh;
  overflow: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 700px) {
    width: 800px;
    height: 800px;
  }
`;

const Description = styled.section`
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

const CodeWrapper = styled.section`
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
`;

interface CopyButtonProps {
  readonly isCopied: boolean;
}

const CopyButton = styled.button<CopyButtonProps>`
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

type Props = {
  subject: SubjectData;
};

const ScrollButton = styled.div`
  position: sticky;
  bottom: 15%;
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

const ArrowWrapper = styled.div<ArrowWrapperProps>`
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

const Subject = ({ subject: { name, description, code } }: Props) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isScrollButton, setIsScrollButton] = useState<boolean>(false);
  const [isScrollButtonAnimaion, setIsScrollButtonAnimation] =
    useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleCopy = (): void => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
  };

  const handleScroll = (e: React.UIEvent<HTMLElement>): void => {
    const scrollTop = (e.target as HTMLElement).scrollTop;
    if (scrollTop > 300) {
      setIsScrollButton(true);
      setIsScrollButtonAnimation(false);
    } else {
      if (isScrollButton) {
        setIsScrollButtonAnimation(true);
      }
    }
  };

  const handleScrollUp = () => {
    if (scrollRef.current)
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Wrapper>
      <NavBar>
        <Link href="/">
          <Arrow isVertical={false} />
        </Link>
        <h1>{name}</h1>
      </NavBar>
      <Container onScroll={handleScroll}>
        <Description ref={scrollRef}>
          {description.length > 0 ? (
            <div dangerouslySetInnerHTML={{ __html: description }} />
          ) : null}
        </Description>
        <CodeWrapper>
          <SyntaxHighlighter language="cpp" style={dark}>
            {code}
          </SyntaxHighlighter>
          <CopyButton onClick={handleCopy} isCopied={isCopied}>
            {isCopied ? "Skopiowano" : "Kopiuj"}{" "}
          </CopyButton>
        </CodeWrapper>
        {isScrollButton ? (
          <ScrollButton onClick={handleScrollUp}>
            <ArrowWrapper isGone={isScrollButtonAnimaion}>
              <Arrow isVertical={true} />
            </ArrowWrapper>
          </ScrollButton>
        ) : null}
      </Container>
    </Wrapper>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const subjects: SubjectName[] = await fetchAllSubjectsNames();

  const paths = subjects.map((subject) => ({
    params: { id: subject.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) return { props: {} };
  const id = params.id?.toString();
  if (!id) return { props: {} };
  const subject: SubjectData = await fetchSubject(id);

  return { props: { subject } };
};

export default Subject;
