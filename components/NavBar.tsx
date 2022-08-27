import Link from "next/link";
import { StyledNav } from "../styles/NavBar.styles";
import { Arrow } from "./Arrow";

type Props = {
  subjectName: string;
}

const NavBar = ({subjectName}: Props) => {
  return (
    <StyledNav>
        <Link href="/">
          <Arrow isVertical={false} />
        </Link>
        <h1>{subjectName}</h1>
      </StyledNav>
  );
};

export default NavBar;