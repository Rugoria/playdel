'use client';

import { useState } from 'react';
import { GeneralSettings } from '../settings.types';

export const GeneralSettingsTab = () => {
  const [settings, setSettings] = useState<GeneralSettings>({
    siteName: 'PlayDel',
    siteUrl: 'https://playdel.com',
    adminEmail: 'admin@playdel.com',
    timezone: 'UTC',
    dateFormat: 'MM/DD/YYYY',
    language: 'en',
  });

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-admin-teal-950 mb-4">General Settings</h3>
        <p className="text-sm text-admin-teal-600 mb-6">Configure basic application settings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-admin-teal-900 mb-2">Site Name</label>
          <input
            type="text"
            value={settings.siteName}
            onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
            className="w-full px-4 py-2 border border-admin-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-admin-tea-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-admin-teal-900 mb-2">Site URL</label>
          <input
            type="url"
            value={settings.siteUrl}
            onChange={(e) => setSettings({ ...settings, siteUrl: e.target.value })}
            className="w-full px-4 py-2 border border-admin-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-admin-tea-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-admin-teal-900 mb-2">Admin Email</label>
          <input
            type="email"
            value={settings.adminEmail}
            onChange={(e) => setSettings({ ...settings, adminEmail: e.target.value })}
            className="w-full px-4 py-2 border border-admin-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-admin-tea-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-admin-teal-900 mb-2">Timezone</label>
          <select
            value={settings.timezone}
            onChange={(e) => setSettings({ ...settings, timezone: e.target.value })}
            className="w-full px-4 py-2 border border-admin-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-admin-tea-400"
          >
            <option value="UTC">UTC</option>
            <option value="America/New_York">Eastern Time</option>
            <option value="America/Chicago">Central Time</option>
            <option value="America/Los_Angeles">Pacific Time</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-admin-teal-900 mb-2">Date Format</label>
          <select
            value={settings.dateFormat}
            onChange={(e) => setSettings({ ...settings, dateFormat: e.target.value })}
            className="w-full px-4 py-2 border border-admin-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-admin-tea-400"
          >
            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-admin-teal-900 mb-2">Language</label>
          <select
            value={settings.language}
            onChange={(e) => setSettings({ ...settings, language: e.target.value })}
            className="w-full px-4 py-2 border border-admin-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-admin-tea-400"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="ar">Arabic</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="px-6 py-2 bg-admin-tea-400 text-white rounded-lg hover:bg-admin-tea-500 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
};
