import styled from "styled-components";

const ClubWriteFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #ecf2ff;
`;

const ClubWriteFormBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80rem;
  min-height: 63rem;
  margin-top: 5.5rem;
  margin-bottom: 5.5rem;
  padding: 4rem 5rem;
  background-color: #fff;
  gap: 1rem;
`;

const ClubWriteBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #dee3ea;
  margin-top: 1rem;
  padding-top: 1rem;
`;

const ClubWriteLabel = styled.div`
  width: 8rem;
  margin-right: 3rem;
  font-size: 1.15rem;
  font-weight: 600;

  &.screen-out {
    display: none;
    width: 0;
    height: 0;
  }
`;

export {
  ClubWriteFormWrapper,
  ClubWriteFormBox,
  ClubWriteBottom,
  ClubWriteLabel,
};
