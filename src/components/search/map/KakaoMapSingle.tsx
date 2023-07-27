"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import { Map, MapMarker, useMap, CustomOverlayMap } from "react-kakao-maps-sdk";
import {
  MapWrapper,
  CustomOverlay,
} from "@/styles/components/search/map/KakaoMap";
import { categoryMap } from "@/utils/categoryFormat";
// recoil
import { useRecoilValue } from "recoil";
import { clubDetailState } from "@/recoil/club/clubState";

interface EventMarkerProps {
  position: {
    lat: number;
    lng: number;
  };
  content: {
    clubName: string;
    clubCategory: string;
  };
}

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`;

const KakaoMap = () => {
  const clubDetail = useRecoilValue(clubDetailState);

  const EventMarkerContainer = ({ position, content }: EventMarkerProps) => {
    const map = useMap();
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
      <>
        <MapMarker
          position={position} // 마커를 표시할 위치
          onClick={(marker) => map.panTo(marker.getPosition())}
          onMouseOver={() => setIsVisible(true)}
          onMouseOut={() => setIsVisible(false)}
          image={{
            src: `/images/category/${categoryMap.get(
              content.clubCategory,
            )}Pin.png`, // 마커이미지의 주소입니다
            size: {
              width: 55,
              height: 69,
            }, // 마커이미지의 크기입니다
            options: {
              offset: {
                x: 27,
                y: 69,
              }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
            },
          }}
        />
        <CustomOverlayMap position={position} yAnchor={1}>
          <CustomOverlay>
            <span className="title">{content.clubName}</span>
          </CustomOverlay>
        </CustomOverlayMap>
      </>
    );
  };

  const [addressX, setAddressX] = useState<number>(127.02493);
  const [addressY, setAddressY] = useState<number>(37.5068914);

  useEffect(() => {
    setAddressX(clubDetail.longitude);
    setAddressY(clubDetail.latitude);
  }, [clubDetail]);

  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <MapWrapper>
        <Map
          center={{
            lat: addressY,
            lng: addressX,
          }} // 지도의 중심좌표
          style={{ width: "100%", height: "100%" }} // 지도의 크기
          level={6} // 지도의 확대 레벨
        >
          <EventMarkerContainer
            key={`EventMarkerContainer-${clubDetail.latitude}-${clubDetail.longitude}`}
            position={{ lat: clubDetail.latitude, lng: clubDetail.longitude }}
            content={{
              clubName: clubDetail.clubName,
              clubCategory: clubDetail.clubCategory,
            }}
          />
        </Map>
      </MapWrapper>
    </>
  );
};

export default KakaoMap;
