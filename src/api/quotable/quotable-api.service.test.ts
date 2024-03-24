import { describe, expect, it, vi } from 'vitest';
import { QuotableApiService } from './quotable-api.service';

vi.mock('../api.service');

describe('QuotableApiService', () => {
  describe('getRandomQuote method', () => {
    it('should call request method with correct parameters', async () => {
      const quotableApiService = new QuotableApiService();

      await quotableApiService.getRandomQuoute();

      expect(quotableApiService.request).toHaveBeenCalledWith({
        method: 'GET',
        url: '/random'
      });
    });
  });
});
