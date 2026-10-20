import assert from "node:assert/strict";
import { test } from "node:test";
import { slugify } from "../slugify.js";

test("lowercases and joins words with single hyphens", () => {
  assert.equal(slugify("Hello World"), "hello-world");
  assert.equal(slugify("a   b\t\nc"), "a-b-c");
});

test("trims leading and trailing hyphens", () => {
  assert.equal(slugify("  --Hello,   World!--  "), "hello-world");
});

test("strips diacritics and spells out ampersands", () => {
  assert.equal(slugify("Crème Brûlée & Co."), "creme-brulee-and-co");
});

test("returns an empty string when nothing is sluggable", () => {
  assert.equal(slugify(""), "");
  assert.equal(slugify("!!!"), "");
});
