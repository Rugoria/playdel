export interface GeneralSettings {
  siteName: string;
  siteUrl: string;
  adminEmail: string;
  timezone: string;
  dateFormat: string;
  language: string;
}

export interface SecuritySettings {
  twoFactorAuth: boolean;
  sessionTimeout: number;
  passwordMinLength: number;
  passwordRequireSpecialChar: boolean;
  maxLoginAttempts: number;
  ipWhitelist: string[];
}

export interface NotificationSettings {
  emailNotifications: boolean;
  smsNotifications: boolean;
  pushNotifications: boolean;
  notifyOnNewUser: boolean;
  notifyOnReport: boolean;
  notifyOnBooking: boolean;
}

export interface UserManagementSettings {
  allowSelfRegistration: boolean;
  requireEmailVerification: boolean;
  defaultUserRole: string;
  customFields: CustomField[];
}

export interface CustomField {
  id: string;
  name: string;
  type: 'text' | 'number' | 'select' | 'date';
  required: boolean;
  options?: string[];
}

export interface FeatureToggle {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  experimental?: boolean;
}

export interface RateLimitSettings {
  apiRequestsPerMinute: number;
  bookingsPerDay: number;
  reportsPerDay: number;
}

export interface SystemSettings {
  maintenanceMode: boolean;
  debugMode: boolean;
  logLevel: 'error' | 'warn' | 'info' | 'debug';
  cacheEnabled: boolean;
}

export type SettingsTab = 
  | 'general'
  | 'security'
  | 'notifications'
  | 'users'
  | 'features'
  | 'monitoring'
  | 'advanced';
