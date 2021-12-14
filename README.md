# CIP34-JS

A JS library for [CIP34](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0034) that defines chain IDs for Cardano.

## Example

| Network name | CIP34 chain ID     |
| ------------ | ------------------ |
| Testnet      | cip34:0-1097911063 |
| Mainnet      | cip34:1-764824073  |

## Usage

Generate chain ID from registry data

```typescript
import { toChainId } from "@dcspark/cip34-js";
import registry from "@dcspark/cip34-js/registry";

const chainId = toChainId({
  networkId: registry.Mainnet.NetworkId,
  networkMagic: registry.Mainnet.NetworkMagic,
});
```

Get parts from chain ID

```typescript
import { fromChainId } from "@dcspark/cip34-js";

const { networkId, networkMagic } = fromChainId(chainId);
```

## Updating

The current status of the registry is tracked inside the CIP repository. To keep things in sync, this project uses the CIP repo as a git submodule.

To use the latest version of the registry, simply run `npm run update-submodule`.
