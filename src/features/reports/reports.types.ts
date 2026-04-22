export type ReportStatus = 'under_investigation' | 'resolved' | 'dismissed';
export type ReportSeverity = 'low' | 'medium' | 'high';
export type VerdictAction = 'dismiss' | 'warning' | 'suspend';

export interface PlayerHistory {
  reportsFiled?: number;
  sustained?: number;
  dismissed?: number;
  priorReports?: number;
  activeBans?: number;
}

export interface Player {
  id: string;
  name: string;
  username: string;
  skillLevel: number;
  avatar?: string;
  initials: string;
  history: PlayerHistory;
}

export interface Evidence {
  type: string;
  attachments?: string[];
  matchId?: string;
}

export interface SystemEvidence {
  matchId: string;
  originalScore: string;
  editCount: number;
  editTimestamp?: string;
  playersConfirmed: boolean;
  skillDelta?: string;
}

export interface Report {
  id: string;
  caseNumber: string;
  status: ReportStatus;
  severity: ReportSeverity;
  category: string;
  openedDate: string;
  assignedTo: string;
  deadlineRemaining: string;
  reporter: Player;
  reporterStatement: string;
  reporterEvidence: Evidence;
  respondent: Player;
  respondentStatement?: string;
  respondentPovSubmitted?: string;
  systemEvidence: SystemEvidence;
  adminNote?: string;
  verdict?: VerdictAction;
}
