import {
  HomeBtnWrapper,
  HomeDesc,
  HomeTitle,
  HomeWrapper,
  MeetingBtn,
} from "@/styles/page/Home";

export default function Home() {
  return (
    <HomeWrapper>
      <HomeTitle>모임이 필요할 땐, 투바투</HomeTitle>
      <HomeDesc>
        투바투와 함께 다양한 사람들과 커뮤니티 모임을 만들 수 있습니다. <br />
        소중한 사람들과 즐겁고 따뜻한 시간을 만들어요.
      </HomeDesc>
      <HomeBtnWrapper>
        <MeetingBtn href="/">모임 만들기</MeetingBtn>
        <MeetingBtn href="/">모임 참여하기</MeetingBtn>
      </HomeBtnWrapper>
    </HomeWrapper>
  );
}
