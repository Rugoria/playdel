import { SystemEvidence } from '../reports.types';

interface SystemEvidenceCardProps {
  evidence: SystemEvidence;
}

export const SystemEvidenceCard = ({ evidence }: SystemEvidenceCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
      <p className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-3">
        System evidence (auto-pulled)
      </p>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-3">
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Match #{evidence.matchId} score</p>
          <p className="text-sm font-medium">{evidence.originalScore}</p>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Edited 4h later</p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-3">
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Score edit log</p>
          <p className="text-sm font-medium text-yellow-700 dark:text-yellow-300">
            {evidence.editCount} edit detected
          </p>
          {evidence.editTimestamp && (
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{evidence.editTimestamp}</p>
          )}
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-3">
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Both players confirmed</p>
          <p className="text-sm font-medium text-green-700 dark:text-green-300">
            {evidence.playersConfirmed ? 'Match attended' : 'Not confirmed'}
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Court check-in logged</p>
        </div>

        {evidence.skillDelta && (
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-3">
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Skill delta</p>
            <p className="text-sm font-medium">{evidence.skillDelta}</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">If corrected score used</p>
          </div>
        )}
      </div>
    </div>
  );
};
