import React from "react";
import Image from "next/image";
import {
  SearchReviewListWrapper,
  SearchReviewClose,
  SearchReviewTop,
  SearchReviewBottom,
  SearchReviewTotalScore,
  SearchReviewText,
  SearchReviewItems,
  SearchReviewItem,
  SearchReviewBox,
  SearchReviewTitle,
  SearchReviewDetail,
  SearchReviewContent,
} from "@/styles/components/search/mapType/SearchReviewList";

const SearchReviewList = () => {
  return (
    <SearchReviewListWrapper>
      <SearchReviewClose>
        <Image
          src="/images/closeDark.svg"
          width={30}
          height={30}
          alt="Close Button Icon"
        />
      </SearchReviewClose>
      <SearchReviewTop>
        <SearchReviewText className="title">리뷰</SearchReviewText>
        <SearchReviewText className="count">18개</SearchReviewText>
        <SearchReviewTotalScore>
          <Image
            src="/images/star.svg"
            width={17}
            height={17}
            alt="Star Icon"
          />
          <SearchReviewText className="score">3.5</SearchReviewText>
        </SearchReviewTotalScore>
      </SearchReviewTop>
      <SearchReviewBottom>
        <SearchReviewItems>
          <SearchReviewItem>
            <Image
              src="/images/review.svg"
              width={120}
              height={120}
              alt="Study Icon"
            />
            <SearchReviewBox>
              <SearchReviewTitle>작성자이름</SearchReviewTitle>
              <SearchReviewDetail>
                <SearchReviewTotalScore>
                  <Image
                    src="/images/star.svg"
                    width={17}
                    height={17}
                    alt="Star Icon"
                  />
                  <SearchReviewText className="score">3.5</SearchReviewText>
                </SearchReviewTotalScore>
                <SearchReviewText className="date">2023-03-01</SearchReviewText>
              </SearchReviewDetail>
              <SearchReviewContent>
                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              </SearchReviewContent>
            </SearchReviewBox>
          </SearchReviewItem>
          <SearchReviewItem>
            <Image
              src="/images/review.svg"
              width={120}
              height={120}
              alt="Study Icon"
            />
            <SearchReviewBox>
              <SearchReviewTitle>작성자이름</SearchReviewTitle>
              <SearchReviewDetail>
                <SearchReviewTotalScore>
                  <Image
                    src="/images/star.svg"
                    width={17}
                    height={17}
                    alt="Star Icon"
                  />
                  <SearchReviewText className="score">3.5</SearchReviewText>
                </SearchReviewTotalScore>
                <SearchReviewText className="date">2023-03-01</SearchReviewText>
              </SearchReviewDetail>
              <SearchReviewContent>
                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              </SearchReviewContent>
            </SearchReviewBox>
          </SearchReviewItem>
          <SearchReviewItem>
            <Image
              src="/images/review.svg"
              width={120}
              height={120}
              alt="Study Icon"
            />
            <SearchReviewBox>
              <SearchReviewTitle>작성자이름</SearchReviewTitle>
              <SearchReviewDetail>
                <SearchReviewTotalScore>
                  <Image
                    src="/images/star.svg"
                    width={17}
                    height={17}
                    alt="Star Icon"
                  />
                  <SearchReviewText className="score">3.5</SearchReviewText>
                </SearchReviewTotalScore>
                <SearchReviewText className="date">2023-03-01</SearchReviewText>
              </SearchReviewDetail>
              <SearchReviewContent>
                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              </SearchReviewContent>
            </SearchReviewBox>
          </SearchReviewItem>
          <SearchReviewItem>
            <Image
              src="/images/review.svg"
              width={120}
              height={120}
              alt="Study Icon"
            />
            <SearchReviewBox>
              <SearchReviewTitle>작성자이름</SearchReviewTitle>
              <SearchReviewDetail>
                <SearchReviewTotalScore>
                  <Image
                    src="/images/star.svg"
                    width={17}
                    height={17}
                    alt="Star Icon"
                  />
                  <SearchReviewText className="score">3.5</SearchReviewText>
                </SearchReviewTotalScore>
                <SearchReviewText className="date">2023-03-01</SearchReviewText>
              </SearchReviewDetail>
              <SearchReviewContent>
                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              </SearchReviewContent>
            </SearchReviewBox>
          </SearchReviewItem>
          <SearchReviewItem>
            <Image
              src="/images/review.svg"
              width={120}
              height={120}
              alt="Study Icon"
            />
            <SearchReviewBox>
              <SearchReviewTitle>작성자이름</SearchReviewTitle>
              <SearchReviewDetail>
                <SearchReviewTotalScore>
                  <Image
                    src="/images/star.svg"
                    width={17}
                    height={17}
                    alt="Star Icon"
                  />
                  <SearchReviewText className="score">3.5</SearchReviewText>
                </SearchReviewTotalScore>
                <SearchReviewText className="date">2023-03-01</SearchReviewText>
              </SearchReviewDetail>
              <SearchReviewContent>
                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              </SearchReviewContent>
            </SearchReviewBox>
          </SearchReviewItem>
          <SearchReviewItem>
            <Image
              src="/images/review.svg"
              width={120}
              height={120}
              alt="Study Icon"
            />
            <SearchReviewBox>
              <SearchReviewTitle>작성자이름</SearchReviewTitle>
              <SearchReviewDetail>
                <SearchReviewTotalScore>
                  <Image
                    src="/images/star.svg"
                    width={17}
                    height={17}
                    alt="Star Icon"
                  />
                  <SearchReviewText className="score">3.5</SearchReviewText>
                </SearchReviewTotalScore>
                <SearchReviewText className="date">2023-03-01</SearchReviewText>
              </SearchReviewDetail>
              <SearchReviewContent>
                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              </SearchReviewContent>
            </SearchReviewBox>
          </SearchReviewItem>
          <SearchReviewItem>
            <Image
              src="/images/review.svg"
              width={120}
              height={120}
              alt="Study Icon"
            />
            <SearchReviewBox>
              <SearchReviewTitle>작성자이름</SearchReviewTitle>
              <SearchReviewDetail>
                <SearchReviewTotalScore>
                  <Image
                    src="/images/star.svg"
                    width={17}
                    height={17}
                    alt="Star Icon"
                  />
                  <SearchReviewText className="score">3.5</SearchReviewText>
                </SearchReviewTotalScore>
                <SearchReviewText className="date">2023-03-01</SearchReviewText>
              </SearchReviewDetail>
              <SearchReviewContent>
                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              </SearchReviewContent>
            </SearchReviewBox>
          </SearchReviewItem>
          <SearchReviewItem>
            <Image
              src="/images/review.svg"
              width={120}
              height={120}
              alt="Study Icon"
            />
            <SearchReviewBox>
              <SearchReviewTitle>작성자이름</SearchReviewTitle>
              <SearchReviewDetail>
                <SearchReviewTotalScore>
                  <Image
                    src="/images/star.svg"
                    width={17}
                    height={17}
                    alt="Star Icon"
                  />
                  <SearchReviewText className="score">3.5</SearchReviewText>
                </SearchReviewTotalScore>
                <SearchReviewText className="date">2023-03-01</SearchReviewText>
              </SearchReviewDetail>
              <SearchReviewContent>
                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              </SearchReviewContent>
            </SearchReviewBox>
          </SearchReviewItem>
          <SearchReviewItem>
            <Image
              src="/images/review.svg"
              width={120}
              height={120}
              alt="Study Icon"
            />
            <SearchReviewBox>
              <SearchReviewTitle>작성자이름</SearchReviewTitle>
              <SearchReviewDetail>
                <SearchReviewTotalScore>
                  <Image
                    src="/images/star.svg"
                    width={17}
                    height={17}
                    alt="Star Icon"
                  />
                  <SearchReviewText className="score">3.5</SearchReviewText>
                </SearchReviewTotalScore>
                <SearchReviewText className="date">2023-03-01</SearchReviewText>
              </SearchReviewDetail>
              <SearchReviewContent>
                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              </SearchReviewContent>
            </SearchReviewBox>
          </SearchReviewItem>
        </SearchReviewItems>
      </SearchReviewBottom>
    </SearchReviewListWrapper>
  );
};

export default SearchReviewList;
