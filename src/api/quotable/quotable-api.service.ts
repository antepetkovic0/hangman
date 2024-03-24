import ApiService from '@api/api.service';
import { Quoute } from '@interfaces/quote.interfaces';

const QUOTABLE_API_BASE_URL = 'https://api.quotable.io';

export class QuotableApiService extends ApiService {
  constructor() {
    super(QUOTABLE_API_BASE_URL);
  }

  async getRandomQuoute(): Promise<Quoute> {
    return await this.request({
      method: 'GET',
      url: '/random'
    });
  }
}
