export function calculateScore(L: number, U: number, E: number, T: number) {
  const errorsWeight = 1000000;
  const uniqueLettersWeight = 1000;
  const lengthWeight = 10;
  const durationWeight = 10000;

  const score =
    (1 / E) * errorsWeight +
    U * uniqueLettersWeight +
    L * lengthWeight +
    (1 / T) * durationWeight;

  return score;
}
