import Image from "next/image";

import { StyledHeader, StyledHeaderTitle } from "./StyledHeader";

const Header: React.FC = () => (
  <StyledHeader>
    <StyledHeaderTitle>
      <h1>Kanban Board React</h1>
      <p>Page developed by Paula López Antelo</p>
    </StyledHeaderTitle>
  </StyledHeader>
);
export { Header };
