export interface PokeType {
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
