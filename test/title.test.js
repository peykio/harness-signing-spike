import assert from "node:assert/strict";
import { test } from "node:test";
import { titleCase } from "../title.js";

test("capitalizes major words", () => {
  assert.equal(titleCase("the old man and the sea"), "The Old Man and the Sea");
  assert.equal(titleCase("war and peace"), "War and Peace");
});

test("always capitalizes the first and last word", () => {
  assert.equal(titleCase("of mice and men"), "Of Mice and Men");
  assert.equal(titleCase("what the world is made of"), "What the World Is Made Of");
});

test("capitalizes the word after a colon", () => {
  assert.equal(
    titleCase("dune: a novel of the desert"),
    "Dune: A Novel of the Desert",
  );
});

test("capitalizes each part of a hyphenated word", () => {
  assert.equal(titleCase("a self-made man"), "A Self-Made Man");
});

test("handles leading punctuation and extra whitespace", () => {
  assert.equal(titleCase("  \"the  road\"  "), "\"The Road\"");
  assert.equal(titleCase(""), "");
});

test("keeps the casing of known mixed-case words", () => {
  assert.equal(
    titleCase("iphone and ipad tips for the busy"),
    "iPhone and iPad Tips for the Busy",
  );
  assert.equal(titleCase("selling on ebay"), "Selling on eBay");
});
