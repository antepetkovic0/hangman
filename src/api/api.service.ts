import axios, { AxiosInstance } from 'axios';
import { HttpRequestConfig } from '@api/api.types';

class ApiService {
  private readonly client: AxiosInstance;

  constructor(baseUrl: string) {
    this.client = axios.create({
      baseURL: baseUrl
    });
  }

  async request(config: HttpRequestConfig) {
    const { method, url, headers, query, data } = config;

    const response = await this.client.request({
      method,
      url,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers
      },
      params: query,
      ...(method === 'POST' && { data })
    });

    return response.data;
  }
}

export default ApiService;
