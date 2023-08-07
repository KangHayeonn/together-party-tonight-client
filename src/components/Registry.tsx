"use client";

import React, { useEffect, useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import GlobalStyle from "@/styles/GlobalStyle";
import ToastBox from "@/components/common/ToastBox";
import AlertToastBox from "@/components/common/AlertToastBox";
import { useRecoilValue } from "recoil";
import { ToastState, AlertToastState } from "@/recoil/common/commonState";

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());
  const isOpenToast = useRecoilValue(ToastState);
  const isOpenAlertToast = useRecoilValue(AlertToastState);

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined")
    return (
      <>
        {children}
        {isOpenToast.isOpenToast && <ToastBox text={isOpenToast.toastMsg} />}
        {isOpenAlertToast.isOpenToast && (
          <AlertToastBox text={isOpenAlertToast.toastMsg} />
        )}
      </>
    );

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <GlobalStyle />
      {children}
    </StyleSheetManager>
  );
}
