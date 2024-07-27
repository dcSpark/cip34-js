export interface Registry {
    PreProduction: Network;
    Preview: Network;
    Mainnet: Network;
    LegacyTestnet: Network;
}

export interface Network {
    Name:         string;
    NetworkId:    number;
    NetworkMagic: number;
    GenesisHash:  string;
}
