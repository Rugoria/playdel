'use client';

import { useState } from 'react';
import { FeatureToggle } from '../settings.types';
import { Zap, AlertCircle } from 'lucide-react';

export const FeatureTogglesTab = () => {
  const [features, setFeatures] = useState<FeatureToggle[]>([
    { id: '1', name: 'Advanced Booking', description: 'Enable multi-court booking and recurring reservations', enabled: true },
    { id: '2', name: 'Live Chat Support', description: 'Real-time chat support for users', enabled: false },
    { id: '3', name: 'AI Match Recommendations', description: 'ML-powered player matching system', enabled: false, experimental: true },
    { id: '4', name: 'Video Analysis', description: 'Upload and analyze match videos', enabled: false, experimental: true },
    { id: '5', name: 'Tournament Mode', description: 'Create and manage tournaments', enabled: true },
    { id: '6', name: 'Payment Gateway', description: 'Integrated payment processing', enabled: true },
  ]);

  const toggleFeature = (id: string) => {
    setFeatures(features.map(f => 
      f.id === id ? { ...f, enabled: !f.enabled } : f
    ));
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-admin-teal-950 mb-4 flex items-center gap-2">
          <Zap size={20} />
          Feature Toggles
        </h3>
        <p className="text-sm text-admin-teal-600 mb-6">Enable or disable application features and modules</p>
      </div>

      <div className="space-y-3">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`p-4 border rounded-lg transition-colors ${
              feature.enabled
                ? 'bg-admin-honeydew-50 border-admin-honeydew-200'
                : 'bg-white border-admin-teal-200'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-medium text-admin-teal-900">{feature.name}</p>
                  {feature.experimental && (
                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full flex items-center gap-1">
                      <AlertCircle size={12} />
                      Experimental
                    </span>
                  )}
                </div>
                <p className="text-sm text-admin-teal-600">{feature.description}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer ml-4">
                <input
                  type="checkbox"
                  checked={feature.enabled}
                  onChange={() => toggleFeature(feature.id)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-admin-tea-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-admin-tea-400"></div>
              </label>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end pt-4 border-t border-admin-teal-200">
        <button className="px-6 py-2 bg-admin-tea-400 text-white rounded-lg hover:bg-admin-tea-500 transition-colors">
          Save Feature Settings
        </button>
      </div>
    </div>
  );
};
