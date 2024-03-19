export function countQuoteUniqueLetters(quote: string) {
  const lowercaseQuote = quote.toLowerCase();
  const uniqueLetters = new Set(lowercaseQuote.match(/[a-z]/g));

  return uniqueLetters.size;
}
