import Link from "next/link";
import styled from "styled-components";

const WrapHeader = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 20px 30px 15px;
`;

const WrapLogo = styled(Link)`
  display: flex;
  font-size: 23px;
  font-weight: 500;
  align-items: center;
`;

const Title = styled.h1`
  margin-left: 8px;
  font-size: 30px;
  font-weight: 700;
  color: #0d3471;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
`;
const MenuItem = styled(Link)`
  margin-right: 35px;
  padding-bottom: 3px;
  font-size: 20px;
  font-weight: 600;
  color: #0d3471;
`;

export { WrapHeader, WrapLogo, Title, Menu, MenuItem };
