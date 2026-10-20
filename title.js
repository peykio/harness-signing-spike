// Minor words stay lowercase unless they start or end the title (or a subtitle).
const MINOR_WORDS = new Set([
  "a", "an", "the",
  "and", "but", "or", "nor", "for", "so", "yet",
  "as", "at", "by", "in", "of", "off", "on", "per", "to", "up", "via",
  "vs", "vs.", "v.",
]);

const capitalize = (word) => word.replace(/\p{L}/u, (ch) => ch.toUpperCase());

export function titleCase(text) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  return words
    .map((word, i) => {
      const first = i === 0 || /[:.!?—]$/.test(words[i - 1]);
      const last = i === words.length - 1 || /[:—]$/.test(word);
      const bare = word.toLowerCase().replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}.]+$/gu, "");
      if (!first && !last && MINOR_WORDS.has(bare)) return word;
      return word.split("-").map(capitalize).join("-");
    })
    .join(" ");
}
