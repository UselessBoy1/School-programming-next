import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import styled from "styled-components";
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
  @media (min-width: 700px) {
    font-size: 2rem;
  }
  h1 {
    margin: 0;
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 50px;
  left: 5%;
  width: 30px;
  height: 30px;
  background: transparent;
  border-radius: 5px;
  border-top: 10px solid black;
  border-right: 10px solid black;
  box-shadow: 0 0 0 lightgray;
  transition: all 200ms ease;
  transform: translate3d(0, -50%, 0) rotate(-135deg);

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
  border-radius: 10px;
  p {
    padding: 10px;
    margin: 5px;
  }
`;

const CodeWrapper = styled.section`
  code {
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

type Props = {
  subject: SubjectData;
};

const Subject = ({ subject: { name, description, code } }: Props) => {
  return (
    <Wrapper>
      <NavBar>
        <Link href="/">
          <Arrow />
        </Link>
        <h1>{name}</h1>
      </NavBar>
      <Container>
        <Description>
          {description.length > 0 ? (
            <p dangerouslySetInnerHTML={{ __html: description }} />
          ) : null}
        </Description>
        <CodeWrapper>
          <SyntaxHighlighter language="cpp" style={dark}>
            {code}
          </SyntaxHighlighter>
        </CodeWrapper>
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
