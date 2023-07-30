import React from "react";
import Image from "next/image";
import {
  AlertWrapper,
  AlertTitle,
  AlertTabs,
  AlertTab,
  AlertContents,
  AlertList,
  AlertItem,
  AlertItemTop,
  AlertItemBottom,
  AlertItemText,
} from "@/styles/components/alert/Alert";

const Alert = () => {
  return (
    <AlertWrapper>
      <AlertTitle>알림</AlertTitle>
      <AlertTabs>
        <AlertTab>모두</AlertTab>
        <AlertTab>읽지않음</AlertTab>
      </AlertTabs>
      <AlertContents>
        <AlertList>
          <AlertItem>
            <AlertItemTop>
              <AlertItemText>만두만둘님이 모임신청을 하였습니다.</AlertItemText>
              <Image
                src={"/images/emailSuccess.svg"}
                width={15}
                height={12}
                alt="Alert Check Icon"
                className="succe"
              />
              <Image
                src={"/images/emailFail.svg"}
                width={15}
                height={12}
                alt="Alert Delete Icon"
              />
            </AlertItemTop>
            <AlertItemBottom>
              <span>5분전</span>
            </AlertItemBottom>
          </AlertItem>
        </AlertList>
      </AlertContents>
    </AlertWrapper>
  );
};

export default Alert;
