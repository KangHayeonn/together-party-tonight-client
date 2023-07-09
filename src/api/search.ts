import axios from "axios";
import { instanceWithKakao } from "@/api";

const prefix = "/v2/local";

interface fetchSearchAddressProps {
  address: string;
}

/*
async function fetchSearchAddress({
  address,
}: fetchSearchAddressProps): Promise<SearchPreview[]> {
  const response = await fetch(
    `https://dapi.kakao.com/v2/local/search/address?query=${address}&page=1&size=10`,
    {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: "KakaoAK ab965e9a61bf134a72b458f79290dc17",
      },
    },
  );
  return response.json();
}*/

const Search = {
  async v1SearchAddress({ address }: fetchSearchAddressProps) {
    try {
      const url = `${prefix}/search/address?query=${address}&page=1&size=10`;
      const result = await instanceWithKakao.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
};

// export { fetchSearchAddress };
export default Search;
