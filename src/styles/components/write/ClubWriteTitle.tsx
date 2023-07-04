import styled from "styled-components";

const ClubWriteTop = styled.div``;

const ClubWriteTitleInput = styled.input`
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 2rem;
  letter-spacing: 0.25px;
  border: 1px solid transparent;
  outline: none;
  margin-bottom: 13px;

  &::placeholder {
    color: #a0a0a0;
  }
`;

const ClubWriteTitleBar = styled.div`
  width: 6rem;
  border-bottom: 5px solid #0d3471;
`;

export { ClubWriteTop, ClubWriteTitleInput, ClubWriteTitleBar };
