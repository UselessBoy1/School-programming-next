import type { NextPage } from "next";
import Head from "next/head";
import Accordion from "../components/Accordion";
import { Wrapper, ContainerUl } from "../styles/Home.styles";
import { Unit } from "../types/unit";

const data: Unit[] = [
  {
    title: "Grafy",
    topics: [
      "Stopień grafu",
      "Najkrótsza ścieżka w grafie nieważonym - BFS",
      "Dowolna ścieżka w grafie - DFS",
      "BFS - lista",
      "BFS - macierz",
      "DFS - lista",
      "DFS - macierz",
      "Lista sąsiedztwa",
      "Macierz sąsiedztwa",
    ],
  },
  {
    title: "Struktury danych",
    topics: ["Lista dwukierunkowa", "Lista jednokierunkowa", "Kolejka", "Stos"],
  },
  {
    title: "Grafy",
    topics: [
      "Stopień grafu",
      "Najkrótsza ścieżka w grafie nieważonym - BFS",
      "Dowolna ścieżka w grafie - DFS",
      "BFS - lista",
      "BFS - macierz",
      "DFS - lista",
      "DFS - macierz",
      "Lista sąsiedztwa",
      "Macierz sąsiedztwa",
    ],
  },
  {
    title: "Struktury danych",
    topics: ["Lista dwukierunkowa", "Lista jednokierunkowa", "Kolejka", "Stos"],
  },
];


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Programowanie i Algorytmika</title>
      </Head>
      <Wrapper>
        <ContainerUl>
          {data.map(({ title, topics }, i) => (
            <Accordion key={i} title={title} topics={topics} />
          ))}
        </ContainerUl>
      </Wrapper>
    </>
  );
};

export default Home;
