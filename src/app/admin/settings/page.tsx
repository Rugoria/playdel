'use client';

import { useState } from 'react';
import { SettingsTab } from '@/features/settings/settings.types';
import { GeneralSettingsTab } from '@/features/settings/components/GeneralSettingsTab';
import { SecuritySettingsTab } from '@/features/settings/components/SecuritySettingsTab';
import { UserManagementTab } from '@/features/settings/components/UserManagementTab';
import { FeatureTogglesTab } from '@/features/settings/components/FeatureTogglesTab';
import { MonitoringTab } from '@/features/settings/components/MonitoringTab';
import { AdvancedTab } from '@/features/settings/components/AdvancedTab';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState<SettingsTab>('general');

  const tabs: { id: SettingsTab; label: string }[] = [
    { id: 'general', label: 'General' },
    { id: 'security', label: 'Security' },
    { id: 'users', label: 'User Management' },
    { id: 'features', label: 'Features' },
    { id: 'monitoring', label: 'Monitoring' },
    { id: 'advanced', label: 'Advanced' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return <GeneralSettingsTab />;
      case 'security':
        return <SecuritySettingsTab />;
      case 'users':
        return <UserManagementTab />;
      case 'features':
        return <FeatureTogglesTab />;
      case 'monitoring':
        return <MonitoringTab />;
      case 'advanced':
        return <AdvancedTab />;
      default:
        return <GeneralSettingsTab />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-2 border-b border-admin-teal-200 pb-2 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-t-lg font-medium text-sm whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? 'bg-admin-tea-400 text-white'
                : 'text-admin-teal-700 hover:bg-admin-teal-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-6 bg-white border border-admin-teal-200 rounded-xl">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default SettingsPage;
