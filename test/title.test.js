import assert from "node:assert/strict";
import { test } from "node:test";
import { titleCase } from "../title.js";

test("capitalizes major words", () =>
  assert.equal(titleCase("the old man and the sea"), "The Old Man and the Sea"));

test("always capitalizes the first and last words", () => {
  assert.equal(titleCase("a tale of two cities"), "A Tale of Two Cities");
  assert.equal(titleCase("what are you looking at"), "What Are You Looking At");
});

test("capitalizes the word after a colon", () =>
  assert.equal(titleCase("dune: the desert planet"), "Dune: The Desert Planet"));

test("capitalizes each part of a hyphenated word", () =>
  assert.equal(titleCase("a well-known story"), "A Well-Known Story"));

test("collapses extra whitespace and handles empty input", () => {
  assert.equal(titleCase("  of mice   and men "), "Of Mice and Men");
  assert.equal(titleCase(""), "");
});

test("keeps the casing of product names", () => {
  assert.equal(titleCase("iphone and ipad tips for the busy"), "iPhone and iPad Tips for the Busy");
  assert.equal(titleCase("selling on ebay: a macos guide"), "Selling on eBay: A macOS Guide");
  assert.equal(titleCase("ios-only apps"), "iOS-Only Apps");
});
