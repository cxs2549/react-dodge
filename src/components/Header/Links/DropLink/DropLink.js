import styled from "styled-components";
import LinkPage from "./LinkPage/LinkPage";
import useOnClickOutside from "use-onclickoutside";
import { useRef, useState } from "react";

const StyledDropLink = styled.div`
  position: relative;
  padding: 0 0.75rem;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;

  span:last-of-type {
    margin-left: 0.5rem;
  }
`;
const DropLink = ({ children, page }) => {
  const [open, setOpen] = useState(false);

  const dropRef = useRef();

  useOnClickOutside(dropRef, () => setOpen(false));
  return (
    <div ref={dropRef}>
      <StyledDropLink className="drop" onClick={() => setOpen(!open)}>
        <span>{children}</span>
      </StyledDropLink>
      {open && <LinkPage page={page} />}
    </div>
  );
};
export default DropLink;
