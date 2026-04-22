'use client';

import { Report, VerdictAction } from '../reports.types';
import { CaseHeader } from './CaseHeader';
import { PlayerCard } from './PlayerCard';
import { SystemEvidenceCard } from './SystemEvidenceCard';
import { VerdictCard } from './VerdictCard';

interface CaseDetailProps {
  report: Report;
  onVerdictSubmit: (action: VerdictAction, note: string) => void;
}

export const CaseDetail = ({ report, onVerdictSubmit }: CaseDetailProps) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-6">
      <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-4 tracking-wide">
        PlayDel Admin · Case Management
      </p>

      <div className="flex flex-col gap-4 max-w-7xl">
        <CaseHeader report={report} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <PlayerCard
            player={report.reporter}
            role="reporter"
            statement={report.reporterStatement}
            evidence={report.reporterEvidence}
          />

          <PlayerCard
            player={report.respondent}
            role="respondent"
            statement={report.respondentStatement || ''}
            povSubmitted={report.respondentPovSubmitted}
          />
        </div>

        <SystemEvidenceCard evidence={report.systemEvidence} />

        <VerdictCard onSubmit={onVerdictSubmit} />
      </div>
    </div>
  );
};
