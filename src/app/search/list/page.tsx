import React from "react";
import SearchTemplate from "@/components/search/SearchTemplate";
import SearchListWrap from "@/components/search/listType/SearchListWrap";

const page = () => {
  return (
    <SearchTemplate classType="list">
      <SearchListWrap />
    </SearchTemplate>
  );
};

export default page;
