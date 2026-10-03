import axios, { AxiosInstance } from 'axios';
import { WhatsAppTextMessage, WhatsAppTemplateMessage } from './types.js';

export interface WhatsAppClientConfig {
  phoneNumberId: string;
  accessToken: string;
  apiVersion?: string;
}

export class WhatsAppClient {
  private http: AxiosInstance;

  constructor(config: WhatsAppClientConfig) {
    const version = config.apiVersion || 'v21.0';
    this.http = axios.create({
      baseURL: `https://graph.facebook.com/${version}/${config.phoneNumberId}`,
      headers: {
        Authorization: `Bearer ${config.accessToken}`,
        'Content-Type': 'application/json',
      },
    });
  }

  async sendTextMessage(to: string, text: string) {
    const payload: WhatsAppTextMessage = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to,
      type: 'text',
      text: { body: text },
    };

    const response = await this.http.post('/messages', payload);
    return response.data;
  }

  async sendTemplateMessage(payload: WhatsAppTemplateMessage) {
    const response = await this.http.post('/messages', payload);
    return response.data;
  }
}
