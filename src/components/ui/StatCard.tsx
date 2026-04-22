import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  iconColor?: string;
  iconBgColor?: string;
}

export const StatCard = ({
  title,
  value,
  change,
  changeType = 'neutral',
  icon: Icon,
  iconColor = 'text-blue-600',
  iconBgColor = 'bg-blue-100',
}: StatCardProps) => {
  const changeColors = {
    positive: 'text-green-600 bg-green-50',
    negative: 'text-red-600 bg-red-50',
    neutral: 'text-gray-600 bg-gray-50',
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">{value}</h3>
          {change && (
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${changeColors[changeType]}`}>
              {change}
            </span>
          )}
        </div>
        <div className={`${iconBgColor} ${iconColor} p-3 rounded-lg`}>
          <Icon size={24} strokeWidth={2} />
        </div>
      </div>
    </div>
  );
};
