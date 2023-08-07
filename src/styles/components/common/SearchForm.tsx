import styled from "styled-components";
import { SearchProps } from "@/components/common/SearchForm";

const SearchWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 2.5rem;
`;

const SearchField = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
`;

const SearchInputForm = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  // padding: 5px;
  gap: 10px;

  img {
    position: absolute;
    right: 17px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const SearchInput = styled.input<SearchProps>`
  border: none;
  margin: 0;
  padding: 10px 40px 10px 12px;
  background-color: #f0efef;
  color: #0d1b2a;
  width: 100%;
  height: ${({ height }) => `${height || 38}px`};
  border-radius: 7px;

  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
  }

  &::placeholder {
    color: #a0a0a0;
  }
`;

export { SearchWrapper, SearchField, SearchInputForm, SearchInput };
