export interface Registry {
  Mainnet: Net;
  LegacyTestnet: Net;
  PreProduction: Net;
  Preview: Net;
}

export interface Net {
  Name: string;
  NetworkId: number;
  NetworkMagic: number;
  GenesisHash: string;
}
