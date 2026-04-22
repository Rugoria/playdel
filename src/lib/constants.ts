// Application constants
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/graphql';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  FORGOT_PASSWORD: '/forgot-password',
  ADMIN: '/admin',
  ADMIN_DASHBOARD: '/admin/dashboard',
  PRIVACY_POLICY: '/privacy-policy',
  TERMS_OF_SERVICE: '/terms-of-service',
} as const;
