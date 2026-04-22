'use client';

import { Activity, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

export const MonitoringTab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-admin-teal-950 mb-4 flex items-center gap-2">
          <Activity size={20} />
          Monitoring & Analytics
        </h3>
        <p className="text-sm text-admin-teal-600 mb-6">System health and performance metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle size={18} className="text-green-600" />
            <p className="text-sm font-medium text-green-900">System Status</p>
          </div>
          <p className="text-2xl font-bold text-green-700">Operational</p>
          <p className="text-xs text-green-600 mt-1">All systems running normally</p>
        </div>

        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={18} className="text-blue-600" />
            <p className="text-sm font-medium text-blue-900">API Response Time</p>
          </div>
          <p className="text-2xl font-bold text-blue-700">142ms</p>
          <p className="text-xs text-blue-600 mt-1">Average over last hour</p>
        </div>

        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle size={18} className="text-yellow-600" />
            <p className="text-sm font-medium text-yellow-900">Error Rate</p>
          </div>
          <p className="text-2xl font-bold text-yellow-700">0.02%</p>
          <p className="text-xs text-yellow-600 mt-1">3 errors in last 24h</p>
        </div>
      </div>

      <div className="p-6 bg-white border border-admin-teal-200 rounded-lg">
        <h4 className="font-semibold text-admin-teal-900 mb-4">Usage Reports</h4>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-admin-teal-100">
            <span className="text-sm text-admin-teal-700">Active Users (24h)</span>
            <span className="font-semibold text-admin-teal-900">1,247</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-admin-teal-100">
            <span className="text-sm text-admin-teal-700">New Registrations (7d)</span>
            <span className="font-semibold text-admin-teal-900">89</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-admin-teal-100">
            <span className="text-sm text-admin-teal-700">Total Bookings (30d)</span>
            <span className="font-semibold text-admin-teal-900">3,421</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-sm text-admin-teal-700">Reports Filed (30d)</span>
            <span className="font-semibold text-admin-teal-900">47</span>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white border border-admin-teal-200 rounded-lg">
        <h4 className="font-semibold text-admin-teal-900 mb-4">Rate Limits & Quotas</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-admin-teal-900 mb-2">
              API Requests/Minute
            </label>
            <input
              type="number"
              defaultValue={100}
              className="w-full px-4 py-2 border border-admin-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-admin-tea-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-admin-teal-900 mb-2">
              Bookings/Day per User
            </label>
            <input
              type="number"
              defaultValue={5}
              className="w-full px-4 py-2 border border-admin-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-admin-tea-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-admin-teal-900 mb-2">
              Reports/Day per User
            </label>
            <input
              type="number"
              defaultValue={3}
              className="w-full px-4 py-2 border border-admin-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-admin-tea-400"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="px-6 py-2 bg-admin-tea-400 text-white rounded-lg hover:bg-admin-tea-500 transition-colors">
          Save Monitoring Settings
        </button>
      </div>
    </div>
  );
};
