// Words kept lowercase unless they open or close the title:
// articles, coordinating conjunctions, and short prepositions.
const MINOR = new Set([
  "a", "an", "the",
  "and", "but", "for", "nor", "or", "so", "yet",
  "as", "at", "by", "in", "of", "off", "on", "per", "to", "up", "via",
]);

// Product names that keep their own casing wherever they appear.
const BRANDS = new Map(
  ["iPhone", "iPad", "iPod", "iMac", "iCloud", "iOS", "iPadOS", "macOS", "watchOS", "tvOS", "eBay"]
    .map((name) => [name.toLowerCase(), name]),
);

const capitalize = (word) => {
  const [, core, rest] = word.match(/^(.*?)([^\p{L}\p{N}]*)$/u);
  const brand = BRANDS.get(core.toLowerCase());
  return brand ? brand + rest : word.charAt(0).toUpperCase() + word.slice(1);
};

export function titleCase(text) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  return words
    .map((word, i) => {
      const first = i === 0 || /[:?!]$/.test(words[i - 1]);
      const last = i === words.length - 1;
      if (!first && !last && MINOR.has(word)) return word;
      return word.split("-").map(capitalize).join("-");
    })
    .join(" ");
}
