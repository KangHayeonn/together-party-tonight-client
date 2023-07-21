import axios from "axios";
import { instance, instanceWithKakao } from "@/api";

const prefix = "/api";

interface fetchSearchAddressProps {
  address: string;
}

interface fetchSearchByOptionsProps {
  options: {
    category: string;
    distance: number;
    lat: number;
    lng: number;
    memberNum: number;
    page: number;
    size: number;
    sortFilter: string;
    status: string;
    tags: string;
  };
}

interface fetchSearchByAddressProps {
  options: {
    lat: number;
    lng: number;
    page: number;
  };
}

const Search = {
  // 주소 검색 (kakao api)
  async v1SearchAddress({ address }: fetchSearchAddressProps) {
    try {
      const url = `/v2/local/search/address?query=${address}&page=1&size=10`;
      const result = await instanceWithKakao.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 옵션 기반 검색
  async v1SearchByOptions({ options }: fetchSearchByOptionsProps) {
    try {
      const url = `${prefix}/search`;
      const result = await instance.get(url, {
        params: {
          category: `${options.category}`,
          distance: `${options.distance}`,
          lat: `${options.lat}`,
          lng: `${options.lng}`,
          memberNum: `${options.memberNum}`,
          tags: `${options.tags}`,
          sortFilter: `${options.sortFilter}`,
          status: `${options.status}`,
          page: `${options.page}`,
          size: `${options.size}`,
        },
      });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 주소/동네 기반 검색
  async v1SearchByAddress({ options }: fetchSearchByAddressProps) {
    try {
      const url = `${prefix}/search/address?lat=${options.lat}&lng=${options.lng}&page=${options.page}&page=20`;
      const result = await instance.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 태그 검색
  async v1SearchTags(keyword: string) {
    try {
      const url = `${prefix}/search/tags?word=${keyword}`;
      const result = await instance.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
};

export default Search;
