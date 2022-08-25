import { useState } from "react";
import { InnerUl, UnitLi } from "../styles/Accordion.styles";
import { Unit } from "../types/unit";

const Accordion = ({ title, topics }: Unit) => {
  const [isActive, setIsAcitve] = useState<boolean>(false);
  return (
    <>
      <UnitLi
        onClick={() => {
          setIsAcitve(!isActive);
        }}
      >
        {title}
      </UnitLi>
      <InnerUl isActive={isActive} items={topics.length + 1}>
        {topics.map((subject) => (
          <li key={subject}>{subject}</li>
        ))}
      </InnerUl>
    </>
  );
};

export default Accordion;
