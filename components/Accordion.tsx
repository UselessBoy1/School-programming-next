import { useState } from "react";
import { InnerUl } from "../styles/Accordion.styles";
import { Subject, Unit } from "../types/types";

type Props = {
  subjects: Subject[];
  isActive: boolean;
};

const Accordion = ({ subjects, isActive }: Props) => {
  return (
    <InnerUl isActive={isActive} items={subjects.length + 1}>
      {subjects.length
        ? subjects.map(({ id, name }) => <li key={id}>{name}</li>)
        : null}
    </InnerUl>
  );
};

export default Accordion;
