import crypto from 'node:crypto';
import { WhatsAppWebhookPayload } from './types.js';

export function verifyWebhookSignature(
  rawBody: string,
  signatureHeader: string | undefined,
  appSecret: string
): boolean {
  if (!signatureHeader) return false;
  const elements = signatureHeader.split('=');
  const signatureHash = elements[1];
  const expectedHash = crypto
    .createHmac('sha256', appSecret)
    .update(rawBody)
    .digest('hex');

  return signatureHash === expectedHash;
}

export function parseWebhookPayload(payload: WhatsAppWebhookPayload) {
  const entry = payload.entry?.[0];
  const change = entry?.changes?.[0];
  const value = change?.value;

  return {
    phoneNumberId: value?.metadata?.phone_number_id,
    displayPhoneNumber: value?.metadata?.display_phone_number,
    contacts: value?.contacts || [],
    messages: value?.messages || [],
    statuses: value?.statuses || [],
  };
}
