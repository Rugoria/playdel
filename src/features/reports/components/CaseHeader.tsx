import { Report } from '../reports.types';

interface CaseHeaderProps {
  report: Report;
}

export const CaseHeader = ({ report }: CaseHeaderProps) => {
  const severityClass = {
    low: 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
    medium: 'bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300',
    high: 'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300',
  }[report.severity];

  const statusClass = {
    under_investigation: 'bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300',
    resolved: 'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300',
    dismissed: 'bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
  }[report.status];

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
      <div className="flex justify-between items-start flex-wrap gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="text-base font-medium">{report.caseNumber}</span>
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusClass}`}>
              {report.status.replace('_', ' ')}
            </span>
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${severityClass}`}>
              {report.severity} severity
            </span>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {report.category} · Opened {report.openedDate} · Assigned to: {report.assignedTo}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-600 dark:text-gray-400">Response deadline</p>
          <p className="text-base font-medium text-red-600 dark:text-red-400">{report.deadlineRemaining}</p>
        </div>
      </div>
    </div>
  );
};
