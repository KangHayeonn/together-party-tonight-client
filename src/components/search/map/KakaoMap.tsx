"use client";

import React, { useState } from "react";
import Script from "next/script";
import { Map, MapMarker, useMap, CustomOverlayMap } from "react-kakao-maps-sdk";
import {
  MapWrapper,
  CustomOverlay,
} from "@/styles/components/search/map/KakaoMap";
import { kakaoMapData } from "@/utils/mock/search";

interface EventMarkerProps {
  position: {
    lat: number;
    lng: number;
  };
  content: {
    clubId: number;
    clubName: string;
  };
}

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`;

const KakaoMap = () => {
  const EventMarkerContainer = ({ position, content }: EventMarkerProps) => {
    const map = useMap();
    const [isVisible, setIsVisible] = useState(false);
    const linkImage =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png";

    return (
      <>
        <MapMarker
          position={position} // 마커를 표시할 위치
          onClick={(marker) => map.panTo(marker.getPosition())}
          onMouseOver={() => setIsVisible(true)}
          onMouseOut={() => setIsVisible(false)}
          image={{
            src: "/images/category/playPin.png", // 마커이미지의 주소입니다
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
            <a
              href="https://map.kakao.com/link/map/11394059"
              target="_blank"
              rel="noreferrer"
              className="test"
              style={{
                backgroundColor: "#0d3471",
                backgroundImage: `url(${linkImage})`,
              }}
            >
              <span className="title">{content.clubName}</span>
            </a>
          </CustomOverlay>
        </CustomOverlayMap>
      </>
    );
  };

  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <MapWrapper>
        <Map
          center={{ lat: 33.450705, lng: 126.570677 }} // 지도의 중심좌표
          style={{ width: "100%", height: "100%" }} // 지도의 크기
          level={3} // 지도의 확대 레벨
        >
          {kakaoMapData.map((value) => (
            <EventMarkerContainer
              key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
              position={value.latlng}
              content={value.content}
            />
          ))}
        </Map>
      </MapWrapper>
    </>
  );
};

export default KakaoMap;
