import { describe, it, expect } from 'vitest';
import { calculateScore } from './score.utils';

describe('score utils', () => {
  describe('calculateScore fn', () => {
    it('score of the solution with fewer errors should always be higher than the solution with more errors', () => {
      const L = 100;
      const U = 20;
      const E1 = 5;
      const E2 = 6;
      const T = 50000;

      const score1 = calculateScore(L, U, E1, T);
      const score2 = calculateScore(L, U, E2, T);

      expect(score1).toBeGreaterThan(score2);
    });

    it('given the same number of errors, solutions with larger numbers of unique letters should be scored higher', () => {
      const L = 100;
      const U1 = 20;
      const U2 = 21;
      const E = 5;
      const T = 20;

      const score1 = calculateScore(L, U1, E, T);
      const score2 = calculateScore(L, U2, E, T);

      expect(score1).toBeLessThan(score2);
    });

    it('given the same number of errors and unique letters, longer solutions should be scored higher', () => {
      const L1 = 100;
      const L2 = 150;
      const U = 20;
      const E = 5;
      const T = 50000;

      const score1 = calculateScore(L1, U, E, T);
      const score2 = calculateScore(L2, U, E, T);

      expect(score1).toBeLessThan(score2);
    });

    it('given the same number of errors, unique letters, and quote length, faster solutions should be scored higher', () => {
      const L = 100;
      const U = 20;
      const E = 5;
      const T1 = 49000;
      const T2 = 50000;

      const score1 = calculateScore(L, U, E, T1);
      const score2 = calculateScore(L, U, E, T2);

      expect(score1).toBeGreaterThan(score2);
    });
  });
});
