import type { Registry } from "./registryTypes.js";

export default {
  "PreProduction": {
    "Name": "Pre-Production",
    "NetworkId": 0,
    "NetworkMagic": 1,
    "GenesisHash": "d4b8de7a11d929a323373cbab6c1a9bdc931beffff11db111cf9d57356ee1937"
  },
  "Preview": {
    "Name": "Preview",
    "NetworkId": 0,
    "NetworkMagic": 2,
    "GenesisHash": "72593f260b66f26bef4fc50b38a8f24d3d3633ad2e854eaf73039eb9402706f1"
  },
  "Mainnet": {
    "Name": "Mainnet",
    "NetworkId": 1,
    "NetworkMagic": 764824073,
    "GenesisHash": "5f20df933584822601f9e3f8c024eb5eb252fe8cefb24d1317dc3d432e940ebb"
  },
  "LegacyTestnet": {
    "Name": "Legacy Testnet",
    "NetworkId": 0,
    "NetworkMagic": 1097911063,
    "GenesisHash": "96fceff972c2c06bd3bb5243c39215333be6d56aaf4823073dca31afe5038471"
  }
} as const satisfies Registry;
