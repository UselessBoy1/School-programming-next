import Link from "next/link";
import { useState } from "react";
import { InnerUl } from "../styles/Accordion.styles";
import { SubjectName } from "../types/types";

type Props = {
  subjects: SubjectName[];
  isActive: boolean;
};

const Accordion = ({ subjects, isActive }: Props) => {
  return (
    <InnerUl isActive={isActive} items={subjects.length + 1}>
      {subjects.length
        ? subjects.map(({ id, name }) => (
            <Link href={`/temat/${id}`}>
              <li key={id}>{name}</li>
            </Link>
          ))
        : null}
    </InnerUl>
  );
};

export default Accordion;
