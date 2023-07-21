import { instanceWithKakao } from "@/api";

const prefix = "/v2/local";

interface fetchSearchAddressProps {
  address: string;
}

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

export default Search;
