import { GetStaticPaths, GetStaticProps } from "next";
import React, { useState, useRef } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark-reasonable";
import {
  fetchSubject,
  fetchAllSubjectsNames,
} from "../../database/dbControllers";
import { SubjectData, SubjectName } from "../../types/types";
import NavBar from "../../components/NavBar";
import { Arrow } from "../../components/Arrow";
import { Wrapper } from "../../styles/Home.styles";
import { Container, Description, CodeWrapper, CopyButton, ScrollButton, ArrowWrapper } from "../../styles/Subject.styles";


type Props = {
  subject: SubjectData;
};

const Subject = ({ subject: { name, description, code } }: Props) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isScrollButton, setIsScrollButton] = useState<boolean>(false);
  const [isScrollButtonAnimaion, setIsScrollButtonAnimation] =
    useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleCopy = (): void => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
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
      scrollRef.current.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
        inline: "start",
      });
  };

  return (
    <Wrapper>
      <NavBar subjectName={name} />
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
