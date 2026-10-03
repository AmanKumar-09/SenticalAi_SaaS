import { Job } from 'bullmq';

export interface WhatsAppJobData {
  organizationId: string;
  waMessageId: string;
  payload: Record<string, unknown>;
}

export async function processWhatsAppMessage(job: Job<WhatsAppJobData>) {
  console.log(`[Worker] Processing WhatsApp job ${job.id} for org ${job.data.organizationId}`);
  // Heavy processing logic will execute here in Stage 4
  return { processed: true, messageId: job.data.waMessageId };
}
