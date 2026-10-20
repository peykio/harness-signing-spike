import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { test } from "node:test";

test("the README is there", () => assert.ok(existsSync("README.md")));
