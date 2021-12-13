export interface Registry {
    Mainnet: Net;
    Testnet: Net;
}

export interface Net {
    Name:         string;
    NetworkId:    number;
    NetworkMagic: number;
    GenesisHash:  string;
}
