export interface fetchSearchAddressProps {
  address: string;
}

export interface fetchSearchByOptionsProps {
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

export interface fetchSearchByAddressProps {
  options: {
    lat: number;
    lng: number;
    page: number;
  };
}

export interface SearchAddressType {
  address: string;
  latitude: number;
  longitude: number;
}

export interface SearchOptionsType {
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
}
