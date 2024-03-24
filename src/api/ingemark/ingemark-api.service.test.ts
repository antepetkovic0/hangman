import { describe, expect, it, vi } from 'vitest';
import { Score } from '@interfaces/game.interfaces';
import { IngemarkApiService } from './ingemark-api.service';

vi.mock('../api.service');

describe('IngemarkApiService', () => {
  describe('sendScore method', () => {
    it('should call request method with correct parameters', async () => {
      const ingemarkApiService = new IngemarkApiService();
      const payload: Omit<Score, 'id'> = {
        duration: 50000,
        errors: 2,
        length: 50,
        quoteId: 'mock-id',
        uniqueCharacters: 17,
        userName: 'mock-name'
      };

      await ingemarkApiService.sendScore(payload);

      expect(ingemarkApiService.request).toHaveBeenCalledWith({
        method: 'POST',
        url: '/highscores',
        data: payload
      });
    });
  });

  describe('getScores method', () => {
    it('should call request method with correct parameters', async () => {
      const ingemarkApiService = new IngemarkApiService();

      await ingemarkApiService.getScores();

      expect(ingemarkApiService.request).toHaveBeenCalledWith({
        method: 'GET',
        url: '/highscores'
      });
    });
  });
});
