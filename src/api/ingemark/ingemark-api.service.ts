import ApiService from '@api/api.service';
import { Score } from '@interfaces/game.interfaces';

const INGEMARK_API_BASE_URL =
  'https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task';

export class IngemarkApiService extends ApiService {
  constructor() {
    super(INGEMARK_API_BASE_URL);
  }

  async sendScore(payload: Omit<Score, 'id'>): Promise<Score> {
    return await this.request({
      method: 'POST',
      url: '/highscores',
      data: payload
    });
  }

  async getScores(): Promise<Score[]> {
    return await this.request({
      method: 'GET',
      url: '/highscores'
    });
  }
}
