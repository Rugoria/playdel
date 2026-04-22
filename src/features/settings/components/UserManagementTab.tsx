'use client';

import { useState } from 'react';
import { UserManagementSettings, CustomField } from '../settings.types';
import { Users, Plus, Trash2 } from 'lucide-react';

export const UserManagementTab = () => {
  const [settings, setSettings] = useState<UserManagementSettings>({
    allowSelfRegistration: true,
    requireEmailVerification: true,
    defaultUserRole: 'player',
    customFields: [
      { id: '1', name: 'Department', type: 'text', required: false },
      { id: '2', name: 'Subscription Type', type: 'select', required: true, options: ['Free', 'Premium', 'Pro'] },
    ],
  });

  const addCustomField = () => {
    const newField: CustomField = {
      id: Date.now().toString(),
      name: 'New Field',
      type: 'text',
      required: false,
    };
    setSettings({ ...settings, customFields: [...settings.customFields, newField] });
  };

  const removeCustomField = (id: string) => {
    setSettings({
      ...settings,
      customFields: settings.customFields.filter(f => f.id !== id),
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-admin-teal-950 mb-4 flex items-center gap-2">
          <Users size={20} />
          User Management
        </h3>
        <p className="text-sm text-admin-teal-600 mb-6">Configure user registration and profile settings</p>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-white border border-admin-teal-200 rounded-lg">
          <label className="flex items-center justify-between cursor-pointer">
            <div>
              <p className="font-medium text-admin-teal-900">Allow Self Registration</p>
              <p className="text-xs text-admin-teal-600">Users can create accounts without admin approval</p>
            </div>
            <input
              type="checkbox"
              checked={settings.allowSelfRegistration}
              onChange={(e) => setSettings({ ...settings, allowSelfRegistration: e.target.checked })}
              className="w-4 h-4 text-admin-tea-400 border-admin-teal-300 rounded focus:ring-admin-tea-400"
            />
          </label>
        </div>

        <div className="p-4 bg-white border border-admin-teal-200 rounded-lg">
          <label className="flex items-center justify-between cursor-pointer">
            <div>
              <p className="font-medium text-admin-teal-900">Require Email Verification</p>
              <p className="text-xs text-admin-teal-600">Users must verify email before accessing the platform</p>
            </div>
            <input
              type="checkbox"
              checked={settings.requireEmailVerification}
              onChange={(e) => setSettings({ ...settings, requireEmailVerification: e.target.checked })}
              className="w-4 h-4 text-admin-tea-400 border-admin-teal-300 rounded focus:ring-admin-tea-400"
            />
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-admin-teal-900 mb-2">Default User Role</label>
          <select
            value={settings.defaultUserRole}
            onChange={(e) => setSettings({ ...settings, defaultUserRole: e.target.value })}
            className="w-full px-4 py-2 border border-admin-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-admin-tea-400"
          >
            <option value="player">Player</option>
            <option value="club_owner">Club Owner</option>
            <option value="coach">Coach</option>
          </select>
        </div>
      </div>

      <div className="border-t border-admin-teal-200 pt-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-admin-teal-900">Custom User Fields</h4>
          <button
            onClick={addCustomField}
            className="flex items-center gap-2 px-4 py-2 bg-admin-tea-400 text-white rounded-lg hover:bg-admin-tea-500 transition-colors text-sm"
          >
            <Plus size={16} />
            Add Field
          </button>
        </div>

        <div className="space-y-3">
          {settings.customFields.map((field) => (
            <div key={field.id} className="flex items-center gap-3 p-3 bg-admin-honeydew-50 border border-admin-honeydew-200 rounded-lg">
              <input
                type="text"
                value={field.name}
                className="flex-1 px-3 py-2 border border-admin-teal-200 rounded-lg text-sm"
                placeholder="Field name"
              />
              <select
                value={field.type}
                className="px-3 py-2 border border-admin-teal-200 rounded-lg text-sm"
              >
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="select">Select</option>
                <option value="date">Date</option>
              </select>
              <label className="flex items-center gap-1 text-sm">
                <input type="checkbox" checked={field.required} className="w-4 h-4" />
                Required
              </label>
              <button
                onClick={() => removeCustomField(field.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-admin-teal-200">
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-admin-teal-300 text-admin-teal-700 rounded-lg hover:bg-admin-teal-50 transition-colors">
            Import Users
          </button>
          <button className="px-4 py-2 border border-admin-teal-300 text-admin-teal-700 rounded-lg hover:bg-admin-teal-50 transition-colors">
            Export Users
          </button>
        </div>
        <button className="px-6 py-2 bg-admin-tea-400 text-white rounded-lg hover:bg-admin-tea-500 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
};
