//Color Shuffler fynctione
type ColorType = "text-color" | "bg-color";

const presetColors: Record<ColorType, string[]> = {
  "text-color": [
    "text-red-500",
    "text-orange-500",
    "text-amber-500",
    "text-yellow-500",
    "text-lime-500",
    "text-green-500",
    "text-emerald-500",
    "text-teal-500",
    "text-cyan-500",
    "text-blue-500",
    "text-indigo-500",
    "text-violet-500",
    "text-purple-500",
    "text-pink-500",
    "text-rose-500",
  ],
  "bg-color": [
    "bg-gradient-to-t from-red-500/100 via-red-500/20 to-white/0 bg-opacity-80",
    "bg-gradient-to-t from-orange-500/100 via-orange-500/30 to-white/0 bg-opacity-80",
    "bg-gradient-to-t from-amber-500/100 via-amber-500/30 to-white/0 bg-opacity-80",
    "bg-gradient-to-t from-yellow-500/100 via-yellow-500/30 to-white/0 bg-opacity-80",
    "bg-gradient-to-t from-lime-500/100 via-lime-500/30 to-white/0 bg-opacity-80",
    "bg-gradient-to-t from-green-500/100 via-green-500/30 to-white/0 bg-opacity-80",
    "bg-gradient-to-t from-emerald-500/100 via-emerald-500/30 to-white/0 bg-opacity-80",
    "bg-gradient-to-t from-teal-500/100 via-teal-500/30 to-white/0 bg-opacity-80",
    "bg-gradient-to-t from-cyan-500/100 via-cyan-500/30 to-white/0 bg-opacity-80",
    "bg-gradient-to-t from-blue-500/100 via-blue-500/30 to-white/0 bg-opacity-80",
    "bg-gradient-to-t from-indigo-500/100 via-indigo-500/30 to-white/0 bg-opacity-80",
    "bg-gradient-to-t from-violet-500/100 via-violet-500/30 to-white/0 bg-opacity-80",
    "bg-gradient-to-t from-purple-500/100 via-purple-500/30 to-white/0 bg-opacity-80",
    "bg-gradient-to-t from-pink-500/100 via-pink-500/30 to-white/0 bg-opacity-80",
    "bg-gradient-to-t from-rose-500/100 via-rose-500/30 to-white/0 bg-opacity-80",
  ],
};

export function getShuffledColorClasses(
  type: ColorType = "text-color"
): string[] {
  const original = presetColors[type] ?? presetColors["text-color"];
  const colorClasses = [...original];

  // Fisher–Yates shuffle
  for (let i = colorClasses.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [colorClasses[i], colorClasses[j]] = [colorClasses[j], colorClasses[i]];
  }

  return colorClasses;
}
