export interface Nld {
  official: string;
  common: string;
}

export interface Pap {
  official: string;
  common: string;
}

export interface Native {
  nld?: Nld;
  pap?: Pap;
}

export interface Name {
  common: string;
  official: string;
  native: any;
}

export interface AWG {
  name: string;
  symbol: string;
}

export interface Currencies {
  AWG?: AWG;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Languages {
  nld: string;
  pap: string;
}

export interface Country {
  name: Name;
  tld?: string[];
  cca2?: string;
  ccn3?: string;
  cca3?: string;
  cioc?: string;
  independent?: boolean;
  status?: string;
  currencies?: any;
  idd: Idd;
  capital: string[];
  altSpellings?: string[];
  region: string;
  subregion: string;
  languages: any;
  translations: any;
  latlng: number[];
  demonym?: string;
  landlocked?: boolean;
  borders?: any[];
  area: number;
  flag: string;
}
