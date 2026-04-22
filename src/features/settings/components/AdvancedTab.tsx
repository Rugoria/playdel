'use client';

import { Code, Terminal, Globe } from 'lucide-react';

export const AdvancedTab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-admin-teal-950 mb-4 flex items-center gap-2">
          <Code size={20} />
          Advanced Options
        </h3>
        <p className="text-sm text-admin-teal-600 mb-6">Developer tools and system configurations</p>
      </div>

      <div className="p-6 bg-white border border-admin-teal-200 rounded-lg">
        <div className="flex items-center gap-2 mb-4">
          <Terminal size={18} className="text-admin-tea-600" />
          <h4 className="font-semibold text-admin-teal-900">Developer Tools</h4>
        </div>
        
        <div className="space-y-4">
          <label className="flex items-center justify-between cursor-pointer p-3 bg-admin-honeydew-50 rounded-lg">
            <div>
              <p className="font-medium text-admin-teal-900">Debug Mode</p>
              <p className="text-xs text-admin-teal-600">Enable detailed error logging</p>
            </div>
            <input type="checkbox" className="w-4 h-4 text-admin-tea-400" />
          </label>

          <label className="flex items-center justify-between cursor-pointer p-3 bg-admin-honeydew-50 rounded-lg">
            <div>
              <p className="font-medium text-admin-teal-900">Sandbox Environment</p>
              <p className="text-xs text-admin-teal-600">Test features without affecting production</p>
            </div>
            <input type="checkbox" className="w-4 h-4 text-admin-tea-400" />
          </label>
        </div>
      </div>

      <div className="p-6 bg-white border border-admin-teal-200 rounded-lg">
        <div className="flex items-center gap-2 mb-4">
          <Globe size={18} className="text-admin-tea-600" />
          <h4 className="font-semibold text-admin-teal-900">Localization</h4>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-admin-teal-900 mb-2">
              Default Language
            </label>
            <select className="w-full px-4 py-2 border border-admin-teal-200 rounded-lg">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
