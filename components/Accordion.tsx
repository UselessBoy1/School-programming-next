import Link from "next/link";
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
            <Link key={id} href={`/temat/${id}`}>
              <li>{name}</li>
            </Link>
          ))
        : null}
    </InnerUl>
  );
};

export default Accordion;
