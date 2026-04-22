'use client';

import { useState } from 'react';
import { CaseDetail } from '@/features/reports/components/CaseDetail';
import { Report, VerdictAction } from '@/features/reports/reports.types';

const mockReport: Report = {
  id: '1',
  caseNumber: 'Case #RPT-0047',
  status: 'under_investigation',
  severity: 'high',
  category: 'Unsportsmanlike conduct',
  openedDate: 'Mar 17, 2026',
  assignedTo: 'Admin Zain',
  deadlineRemaining: '14h 32m remaining',
  reporter: {
    id: '1',
    name: 'Ahmad Hassan',
    username: '@ahmad_h',
    skillLevel: 3.8,
    initials: 'AH',
    history: {
      reportsFiled: 3,
      sustained: 2,
      dismissed: 1,
    },
  },
  reporterStatement: 'He submitted a completely wrong score for our match on Mar 15. We played 6–2, 6–3 in my favour but he reported 2–6, 3–6. I have screenshots of the final score.',
  reporterEvidence: {
    type: 'screenshot',
    matchId: '4821',
    attachments: ['score_proof.jpg'],
  },
  respondent: {
    id: '2',
    name: 'Saad Khan',
    username: '@saad_k',
    skillLevel: 3.5,
    initials: 'SK',
    history: {
      priorReports: 1,
      sustained: 0,
      activeBans: 0,
    },
  },
  respondentStatement: 'I made an honest mistake entering the score, I thought the format was sets not games. I updated it as soon as Ahmad messaged me.',
  respondentPovSubmitted: 'Mar 18, 09:14',
  systemEvidence: {
    matchId: '4821',
    originalScore: 'Originally: 2–6, 3–6',
    editCount: 1,
    editTimestamp: 'Mar 15, 22:37',
    playersConfirmed: true,
    skillDelta: 'Ahmad +12 pts',
  },
};

const ReportsPage = () => {
  const [selectedReport] = useState<Report>(mockReport);

  const handleVerdictSubmit = (action: VerdictAction, note: string) => {
    console.log('Verdict submitted:', { action, note });
  };

  return (
    <div className="-m-8">
      <CaseDetail report={selectedReport} onVerdictSubmit={handleVerdictSubmit} />
    </div>
  );
};

export default ReportsPage;
