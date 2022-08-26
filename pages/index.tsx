import type { GetStaticProps } from "next";
import Head from "next/head";
import { useState } from "react";
import Accordion from "../components/Accordion";
import { fetchUnits } from "../database/dbControllers";
import { Wrapper, ContainerUl, UnitLi } from "../styles/Home.styles";
import { Unit } from "../types/types";

type Props = {
  units: Unit[];
};

const Home = ({ units }: Props) => {
  const [activeUnitId, setActiveUnitId] = useState<number | null>(null);

  const isUnitActive = (unitId: number): boolean => activeUnitId == unitId ? true : false;

  const handleUnitClick = (unitId: number): void => {
    if (activeUnitId == unitId) setActiveUnitId(null);
    else setActiveUnitId(unitId);
  }

  return (
    <>
      <Head>
        <title>Programowanie i Algorytmika</title>
      </Head>
      <Wrapper>
        <ContainerUl>
          {units.map(({ id, title, subjects }) => (
            <div key={id}>
              <UnitLi onClick={() => handleUnitClick(id)}>{title}</UnitLi>
              <Accordion subjects={subjects} isActive={isUnitActive(id)} />
            </div>
          ))}
        </ContainerUl>
      </Wrapper>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const units = await fetchUnits();
  return { props: { units } };
};

export default Home;
