import {
  Line,
  Member,
  MemberCnt,
  MemberListWrapper,
  MemberWrapper,
  ModalInnerMini,
} from "@/styles/components/mypage/ApplyDetailModal";
import Modal from "../common/Modal";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { ModalAtom } from "@/recoil/modal/atom";
import { useState } from "react";
import { ApplicationItem } from "@/types/mypage";
import { RequestBtnWrapper } from "@/styles/components/mypage/RequestCalcModal";
import TextButton from "../common/TextButton";
import {
  Amount,
  CalcDate,
  CalcInfoWrapper,
  MemberWrap,
  Members,
  SelectWrapper,
} from "@/styles/components/mypage/CalcAccountModal";

export default function CalcAccountModal() {
  const { clubItem, clubId } = useRecoilValue(ModalAtom);
  const [currentMember, setCurrentMember] = useState<ApplicationItem[]>([]);
  const [inpPay, setInpPay] = useState(0);
  const [isCalc, setIsCalc] = useState(false);

  const dummyList = [
    {
      memberId: 1,
      nickName: "정기수",
      profileImage: "/images/Naver.svg",
    },
    {
      memberId: 2,
      nickName: "정기수2",
      profileImage: "/images/Naver.svg",
    },
  ];
  const dummyList2 = [
    {
      memberId: 1,
      nickName: "정기수",
      profileImage: "/images/Naver.svg",
    },
    {
      memberId: 2,
      nickName: "정기수2",
      profileImage: "/images/Naver.svg",
    },
    {
      memberId: 2,
      nickName: "정기수3",
      profileImage: "/images/Naver.svg",
    },
  ];

  const showDummy = isCalc ? dummyList2 : dummyList;

  return (
    <Modal title="정산내역">
      <ModalInnerMini>
        <CalcInfoWrapper>
          <Members>정기수 외 3명</Members>
          <Amount>2,000원</Amount>
          <CalcDate>정산일 2023.06.05 13:25</CalcDate>
        </CalcInfoWrapper>
        <Line />
        <MemberListWrapper>
          <SelectWrapper>
            <button
              className={!isCalc ? "selected" : ""}
              onClick={() => {
                setIsCalc(false);
              }}
            >
              미정산 {dummyList.length}
            </button>
            <button
              className={isCalc ? "selected" : ""}
              onClick={() => {
                setIsCalc(true);
              }}
            >
              정산완료 {dummyList2.length}
            </button>
          </SelectWrapper>
          {showDummy.length > 0 &&
            showDummy.map((item) => (
              <MemberWrapper key={item.memberId}>
                <MemberWrap>
                  <Member>
                    <Image
                      src={item.profileImage}
                      width={40}
                      height={40}
                      alt="멤버 사진"
                    />
                    {item.nickName}
                  </Member>
                  <TextButton
                    text="채팅하기"
                    onClick={() => console.log(1)}
                    fontSize={14}
                    width={80}
                    height={30}
                    color="#000"
                    background="#fff"
                    border="true"
                  />
                </MemberWrap>
                <p>500</p>
              </MemberWrapper>
            ))}
        </MemberListWrapper>
        <RequestBtnWrapper>
          <TextButton
            text="확인"
            onClick={() => console.log(1)}
            fontSize={16}
            width={110}
            height={40}
          />
        </RequestBtnWrapper>
      </ModalInnerMini>
    </Modal>
  );
}
