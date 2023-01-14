export interface PokeType {
  id: number;
  name: string;
  url: string;
}

export interface DetailsType {
  type: {
    name: string;
  };
  slot: number;
}

export interface ProfilePoke {
  weight?: number;
  height?: number;
  name?: string;
}

export interface AbilitiesType {
  ability: {
    name: string;
  };
}

export interface MovesType {
  move: {
    name: string;
  };
}

export interface StatsType {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface ImgType {
  front_default?: string;
}
export interface CatchType {
  name?: string;
  id?: number;
}
