// Articles, coordinating conjunctions and short prepositions stay lowercase
// unless they open or close the title, or follow a colon.
const MINOR = new Set([
  "a", "an", "the",
  "and", "but", "or", "nor", "for", "so", "yet",
  "as", "at", "by", "in", "of", "off", "on", "per", "to", "up", "via",
  "vs", "vs.", "v.", "from", "into", "onto", "with", "over",
]);

const capitalize = (word) => word.replace(/\p{L}/u, (c) => c.toUpperCase());

export function titleCase(text) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  return words
    .map((word, i) => {
      const first = i === 0 || /[:—?!]$/.test(words[i - 1]);
      const last = i === words.length - 1;
      const bare = word.toLowerCase().replace(/^[^\p{L}]+|[^\p{L}.]+$/gu, "");
      if (!first && !last && MINOR.has(bare)) return word.toLowerCase();
      return word
        .split("-")
        .map((part) => capitalize(part))
        .join("-");
    })
    .join(" ");
}
