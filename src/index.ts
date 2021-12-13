export type IdPair = {
  networkId: number;
  networkMagic: number;
};
export function toChainId(data: IdPair): string {
  if (!validateNetworkId(data.networkId))
    throw new Error(Errors.NetworkIdRange(data.networkId));

  if (!validateNetworkMagic(data.networkMagic))
    throw new Error(Errors.NetworkMagicRange(data.networkMagic));

  return `cip34:${data.networkId}-${data.networkMagic}`;
}

export function fromChainId(chainId: string): IdPair {
  const regex = /^cip34:([0-9]{1,2})-([0-9]{1,10})$/g;
  const match = regex.exec(chainId);
  if (match == null || match.length < 2) {
    throw new Error(Errors.NoMatch(chainId));
  }

  // note: these parseInt calls are guaranteed to be well-behaved thanks to the regex
  const networkId = Number.parseInt(match[1], 10);
  const networkMagic = Number.parseInt(match[2], 10);

  if (!validateNetworkId(networkId))
    throw new Error(Errors.NetworkIdRange(networkId));

  if (!validateNetworkMagic(networkMagic))
    throw new Error(Errors.NetworkMagicRange(networkMagic));

  return {
    networkMagic,
    networkId,
  };
}

// ============
//  Validation
// ============

export const Errors = {
  NetworkIdRange: (networkId: number): string =>
    `Network ID out of range [0, 16). Got ${networkId}`,
  NetworkMagicRange: (networkMagic: number): string =>
    `Network magic out of range [0, 4_294_967_295). Got ${networkMagic}`,
  NoMatch: (chainId: string): string =>
    `Provided chain ID did not match required format. Got ${chainId}`,
};

// We could do the validation using AVJ w/ json-schema
// but the validation logic is simple enough and we want to keep this library slim

export function validateNetworkId(networkId: number): boolean {
  // Cardano addresses only support 4 bits for the network ID
  if (networkId >= 16 || networkId < 0) {
    return false;
  }
  return true;
}
export function validateNetworkMagic(networkMagic: number): boolean {
  // Cardano network magic is an unsigned 32-bit number
  if (networkMagic >= 4_294_967_295 || networkMagic < 0) {
    return false;
  }
  return true;
}
