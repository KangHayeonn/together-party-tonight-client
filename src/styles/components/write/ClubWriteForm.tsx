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
  min-height: 70rem;
  margin-top: 5.5rem;
  margin-bottom: 5.5rem;
  padding: 4rem 5rem;
  background-color: #fff;
  gap: 1rem;
`;

const ClubWriteTop = styled.div``;

const ClubWriteCategory = styled.div``;

const ClubWriteTag = styled.div``;

const ClubWriteDetail = styled.div``;

const ClubWriteDetailLeft = styled.div``;

const ClubWriteDetailRight = styled.div``;

const ClubWriteContent = styled.div``;

const ClubWriteBottom = styled.div``;

const ClubWriteLabel = styled.div`
  &.screen-out {
    display: none;
    width: 0;
    height: 0;
  }
`;

const ClubWriteInput = styled.div``;

export {
  ClubWriteFormWrapper,
  ClubWriteFormBox,
  ClubWriteTop,
  ClubWriteCategory,
  ClubWriteTag,
  ClubWriteDetail,
  ClubWriteDetailLeft,
  ClubWriteDetailRight,
  ClubWriteContent,
  ClubWriteBottom,
  ClubWriteLabel,
  ClubWriteInput,
};
