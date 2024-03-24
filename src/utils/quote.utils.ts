export function countQuoteUniqueLetters(quote: string) {
  const uniqueLetters = new Set(quote.match(/[a-zA-Z]/g));

  return uniqueLetters.size;
}

export function isLetter(char: string) {
  return /[a-zA-Z]/.test(char);
}

export function removeNonLetters(str: string) {
  return str.replace(/[^a-zA-Z]/g, '');
}
