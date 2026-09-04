import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

const headers_1 = {};
const headers_2 = { authorization: "" };
const headers_3 = { authorization: "ApiKey Hello there " };

describe.for([
  { state: "missing", headers: headers_1, expected: null },
  { state: "empty", headers: headers_2, expected: null },
  { state: "empty", headers: headers_3, expected: "Hello" },
])("auth", ({ state, headers, expected }) => {
  test(`auth header ${state}`, () => {
    expect(getAPIKey(headers)).toBe(expected);
  });
});
