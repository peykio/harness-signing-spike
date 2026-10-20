import assert from "node:assert/strict";
import { test } from "node:test";
import { titleCase } from "../title.js";

test("capitalizes major words and keeps minor words lowercase", () => {
  assert.equal(titleCase("the lord of the rings"), "The Lord of the Rings");
  assert.equal(titleCase("war and peace"), "War and Peace");
  assert.equal(titleCase("a tale of two cities"), "A Tale of Two Cities");
});

test("always capitalizes the first and last words", () => {
  assert.equal(titleCase("of mice and men"), "Of Mice and Men");
  assert.equal(titleCase("what are you looking at"), "What Are You Looking At");
});

test("capitalizes the word after a colon", () => {
  assert.equal(titleCase("dune: the desert planet"), "Dune: The Desert Planet");
  assert.equal(titleCase("a study in scarlet: a novel"), "A Study in Scarlet: A Novel");
});

test("capitalizes each part of a hyphenated word", () => {
  assert.equal(titleCase("the self-made man"), "The Self-Made Man");
});

test("handles punctuation and extra whitespace", () => {
  assert.equal(titleCase("  \"the raven\" and other poems "), "\"The Raven\" and Other Poems");
  assert.equal(titleCase("harry potter and the order of the phoenix"), "Harry Potter and the Order of the Phoenix");
  assert.equal(titleCase(""), "");
});
