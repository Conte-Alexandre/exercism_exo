export function decodedValue(colors: string[]): number {
  return Number(String(COLORS.indexOf(colors[0])) + String(COLORS.indexOf(colors[1])));
}
const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
