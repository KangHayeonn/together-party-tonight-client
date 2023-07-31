import { styled } from "styled-components";

const ModalInnerMini = styled.div`
  width: 530px;
  min-height: 400px;
  padding: 30px 50px;
`;

const ClubTitle = styled.h2`
  font-size: 26px;
  font-weight: 700;
`;

const ClubInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const MeetingDate = styled.p`
  font-size: 14px;
  color: #b1b1b1;
`;

const MeetingMember = styled.p`
  font-size: 16px;
`;

const Line = styled.hr`
  background: #dedada;
  height: 1px;
  border: 0;
  width: 100%;
  margin: 15px 5px;
`;

const MemberListWrapper = styled.div`
  margin-bottom: 20px;
`;

const MemberWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
`;

const Member = styled.div`
  display: flex;
  align-items: center;

  & img {
    margin-right: 10px;
    border-radius: 50%;
  }
`;

const MemberCnt = styled.p`
  margin: 40px 0 10px;
`;

export {
  ModalInnerMini,
  ClubTitle,
  ClubInfo,
  MeetingDate,
  MeetingMember,
  Line,
  MemberListWrapper,
  MemberWrapper,
  Member,
  MemberCnt,
};
