import { WHATSAPP_QUEUE_NAME } from './queues/whatsapp.queue.js';
import { processWhatsAppMessage } from './processors/whatsapp.processor.js';

export function startWorker() {
  console.log(`⚡ Sentical AI Worker Engine initialized.`);
  console.log(`📦 Registered BullMQ Queue Processor: [${WHATSAPP_QUEUE_NAME}]`);
}
