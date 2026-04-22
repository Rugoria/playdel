'use client';

import { useState } from 'react';
import { VerdictAction } from '../reports.types';

interface VerdictCardProps {
  onSubmit: (action: VerdictAction, note: string) => void;
}

export const VerdictCard = ({ onSubmit }: VerdictCardProps) => {
  const [note, setNote] = useState('');
  const [selectedAction, setSelectedAction] = useState<VerdictAction | null>(null);

  const handleAction = (action: VerdictAction) => {
    setSelectedAction(action);
    onSubmit(action, note);
  };

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
      <p className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-3">
        Admin verdict
      </p>

      <div className="flex gap-3 mb-3 flex-wrap">
        <button
          onClick={() => handleAction('dismiss')}
          className="flex-1 min-w-[140px] px-3 py-2 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:opacity-80 transition-opacity"
        >
          Dismiss — insufficient evidence
        </button>
        <button
          onClick={() => handleAction('warning')}
          className="flex-1 min-w-[140px] px-3 py-2 text-sm font-medium rounded-lg border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950 text-yellow-700 dark:text-yellow-300 hover:opacity-80 transition-opacity"
        >
          Issue warning
        </button>
        <button
          onClick={() => handleAction('suspend')}
          className="flex-1 min-w-[140px] px-3 py-2 text-sm font-medium rounded-lg border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300 hover:opacity-80 transition-opacity"
        >
          Suspend (select duration)
        </button>
      </div>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Add internal admin note (not shown to players)..."
        className="w-full min-h-[60px] p-3 text-xs bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg resize-vertical outline-none focus:border-gray-300 dark:focus:border-gray-600"
      />
      <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
        This note is internal only and will not be shared with either party.
      </p>
    </div>
  );
};
