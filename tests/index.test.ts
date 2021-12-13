import Ajv from "ajv";
import schema from "../CIPs/CIP-0034/schema.json";
import data from "../CIPs/CIP-0034/registry.json";
import { fromChainId, toChainId } from "../src/index";

test("Registry data is valid", () => {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const valid = validate(data);
  if (!valid) console.log(validate.errors);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  expect(validate(data)).toBeTruthy();
});

test("(de)serializing result", () => {
  const chainId = "cip34:0-1097911063";
  const roundtrip = toChainId(fromChainId(chainId));
  expect(chainId).toBe(roundtrip);
});

test("invalid toChainId", () => {
  // out of range: too low

  expect(() =>
    toChainId({
      networkId: -1,
      networkMagic: 1097911063,
    })
  ).toThrow();

  expect(() =>
    toChainId({
      networkId: 0,
      networkMagic: -1,
    })
  ).toThrow();

  // out of range: too high

  expect(() =>
    toChainId({
      networkId: 16,
      networkMagic: 1097911063,
    })
  ).toThrow();

  expect(() =>
    toChainId({
      networkId: 0,
      networkMagic: 5_000_000_000,
    })
  ).toThrow();
});

test("invalid fromChainId", () => {
  // invalid format

  expect(() => fromChainId("cip34:")).toThrow();

  // valid format but invalid values

  expect(() => fromChainId("cip34:17-1097911063")).toThrow();

  expect(() => fromChainId("cip34:0-5000000000")).toThrow();
});
