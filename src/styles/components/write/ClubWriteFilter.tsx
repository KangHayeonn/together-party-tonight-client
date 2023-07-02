import styled from "styled-components";

const ClubWriteFilterWrapper = styled.div`
  display: flex;
`;

const ClubWriteRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.7rem;
  gap: 0.85rem;
`;

const ClubWriteCategory = styled.div`
  display: flex;
  align-items: center;
  width: 45.5rem;
  padding-bottom: 10px;
  border-bottom: 1px solid #dee3ea;

  &:last-child {
    padding: 0;
    border: none;
  }
`;

export { ClubWriteFilterWrapper, ClubWriteRight, ClubWriteCategory };
