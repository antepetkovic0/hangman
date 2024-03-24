import { describe, it, expect } from 'vitest';
import {
  countQuoteUniqueLetters,
  isLetter,
  removeNonLetters
} from './quote.utils';

describe('quote utils', () => {
  describe('countQuoteUniqueLetters fn', () => {
    it('should return the correct number of uppercase unique letters in the quote', () => {
      const quote = 'Hello World';

      const uniqueLetters = countQuoteUniqueLetters(quote);

      expect(uniqueLetters).toBe(7);
    });

    it('should return 0 for an empty quote', () => {
      const quote = '';

      const uniqueLetters = countQuoteUniqueLetters(quote);

      expect(uniqueLetters).toBe(0);
    });
  });

  describe('isLetter fn', () => {
    it('should return true letter character', () => {
      const letter = 'A';
      const nonLetter = '1';

      const isLetterResult = isLetter(letter);
      const isNonLetterResult = isLetter(nonLetter);

      expect(isLetterResult).toBe(true);
      expect(isNonLetterResult).toBe(false);
    });
  });

  describe('removeNonLetters fn', () => {
    it('should remove non-letter characters from the string', () => {
      const stringWithNonLetters = 'Hello123World!';

      const stringWithoutNonLetters = removeNonLetters(stringWithNonLetters);

      expect(stringWithoutNonLetters).toBe('HelloWorld');
    });

    it('should return an empty string if all characters are non-letters', () => {
      const stringWithoutLetters = '1234567890';

      const stringWithoutNonLetters = removeNonLetters(stringWithoutLetters);

      expect(stringWithoutNonLetters).toBe('');
    });
  });
});
