export const getConicGradient = (colors: string[], startDeg = 45) => {
  const step = 100 / colors.length
  return `conic-gradient(from ${startDeg}deg, ${colors
    .map((c, i) => `${c} ${i * step}% ${(i + 1) * step}%`)
    .join(", ")})`
}
