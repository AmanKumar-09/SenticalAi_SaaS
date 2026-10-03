import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  PORT: z.string().default('4000'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  DATABASE_URL: z.string().optional(),
  REDIS_URL: z.string().optional(),
  AUTH_SECRET: z.string().default('development-auth-secret-min-32-chars-key'),
  CLIENT_ORIGINS: z.string().default('http://localhost:3000,http://localhost:5173'),
});

export const env = envSchema.parse(process.env);
