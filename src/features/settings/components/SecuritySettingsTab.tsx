'use client';

import { useState } from 'react';
import { SecuritySettings } from '../settings.types';
import { Shield, Lock, Key } from 'lucide-react';

export const SecuritySettingsTab = () => {
  const [settings, setSettings] = useState<SecuritySettings>({
    twoFactorAuth: true,
    sessionTimeout: 30,
    passwordMinLength: 8,
    passwordRequireSpecialChar: true,
    maxLoginAttempts: 5,
    ipWhitelist: [],
  });

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-admin-teal-950 mb-4 flex items-center gap-2">
          <Shield size={20} />
          Security Settings
        </h3>
        <p className="text-sm text-admin-teal-600 mb-6">Manage authentication and access control</p>
      </div>

      <div className="space-y-6">
        <div className="p-4 bg-admin-honeydew-50 border border-admin-honeydew-200 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Key size={18} className="text-admin-tea-600" />
              <div>
                <p className="font-medium text-admin-teal-900">Two-Factor Authentication</p>
                <p className="text-xs text-admin-teal-600">Require 2FA for all admin accounts</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.twoFactorAuth}
                onChange={(e) => setSettings({ ...settings, twoFactorAuth: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-admin-tea-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-admin-tea-400"></div>
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-admin-teal-900 mb-2">
              Session Timeout (minutes)
            </label>
            <input
              type="number"
              value={settings.sessionTimeout}
              onChange={(e) => setSettings({ ...settings, sessionTimeout: parseInt(e.target.value) })}
              className="w-full px-4 py-2 border border-admin-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-admin-tea-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-admin-teal-900 mb-2">
              Max Login Attempts
            </label>
            <input
              type="number"
              value={settings.maxLoginAttempts}
              onChange={(e) => setSettings({ ...settings, maxLoginAttempts: parseInt(e.target.value) })}
              className="w-full px-4 py-2 border border-admin-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-admin-tea-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-admin-teal-900 mb-2">
              Password Min Length
            </label>
            <input
              type="number"
              value={settings.passwordMinLength}
              onChange={(e) => setSettings({ ...settings, passwordMinLength: parseInt(e.target.value) })}
              className="w-full px-4 py-2 border border-admin-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-admin-tea-400"
            />
          </div>

          <div className="flex items-center">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.passwordRequireSpecialChar}
                onChange={(e) => setSettings({ ...settings, passwordRequireSpecialChar: e.target.checked })}
                className="w-4 h-4 text-admin-tea-400 border-admin-teal-300 rounded focus:ring-admin-tea-400"
              />
              <span className="text-sm font-medium text-admin-teal-900">Require Special Characters</span>
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="px-6 py-2 bg-admin-tea-400 text-white rounded-lg hover:bg-admin-tea-500 transition-colors">
          Save Security Settings
        </button>
      </div>
    </div>
  );
};
