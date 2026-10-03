export const API_ENDPOINTS = {
  HEALTH: '/health',
  AUTH: {
    REGISTER: '/api/v1/auth/register',
    LOGIN: '/api/v1/auth/login',
    LOGOUT: '/api/v1/auth/logout',
    ME: '/api/v1/auth/me',
    FORGOT_PASSWORD: '/api/v1/auth/forgot-password',
    RESET_PASSWORD: '/api/v1/auth/reset-password',
  },
  WEBHOOKS: {
    WHATSAPP: '/api/v1/webhooks/whatsapp',
  },
} as const;
