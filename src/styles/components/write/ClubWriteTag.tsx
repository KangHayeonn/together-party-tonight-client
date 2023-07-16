import styled from "styled-components";

const ClubWriteTagWrapper = styled.div`
  position: relative;
  font-size: 1.15rem;
  font-weight: 500;
  color: #b1b1b1;
  letter-spacing: 0.25px;
  padding-bottom: 10px;
  border-bottom: 1px solid #dee3ea;
`;

const ClubWriteToggle = styled.div`
  position: absolute;
  top: 10px;
  width: 20rem;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ToggleText = styled.p`
  font-size: 0.7rem;
  color: #fff;
  letter-spacing: 0.1px;
`;

export { ClubWriteTagWrapper, ClubWriteToggle, ToggleText };
