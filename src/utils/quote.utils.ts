export function countQuoteUniqueLetters(quote: string) {
  const uniqueLetters = new Set(quote.match(/[A-Z]/g));

  return uniqueLetters.size;
}

export function isLetter(char: string) {
  return /[A-Z]/.test(char);
}

export function removeNonLetters(str: string) {
  return str.replace(/[^A-Z]/g, '');
}
