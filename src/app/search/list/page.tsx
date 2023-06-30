import React from "react";
import SearchTemplate from "@/components/search/SearchTemplate";
import SearchNav from "@/components/search/listType/SearchNav";
import SearchResult from "@/components/search/listType/SearchResult";

const page = () => {
  return (
    <SearchTemplate classType="list">
      <SearchNav />
      <SearchResult />
    </SearchTemplate>
  );
};

export default page;
