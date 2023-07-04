import styled from "styled-components";

const ClubWriteContentWrapper = styled.div`
  position: relative;
  border-top: 1px solid #dee3ea;
`;

const ClubWriteTextArea = styled.textarea`
  width: 70rem;
  height: 22rem;
  margin-top: 1rem;
  border: none;
  resize: none;
  font-size: 1.2rem;
  overflow: hidden;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #b1b1b1;
  }
`;

const ClubWriteTextAreaLength = styled.div`
  position: absolute;
  right: 0;
  font-size: 0.95rem;
  font-weight: 600;
  color: #bdc8d6;
  letter-spacing: 0.25px;
`;

export { ClubWriteContentWrapper, ClubWriteTextArea, ClubWriteTextAreaLength };
