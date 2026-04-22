import { Player } from '../reports.types';

interface PlayerCardProps {
  player: Player;
  role: 'reporter' | 'respondent';
  statement: string;
  evidence?: { matchId?: string; attachments?: string[] };
  povSubmitted?: string;
}

export const PlayerCard = ({ player, role, statement, evidence, povSubmitted }: PlayerCardProps) => {
  const isRespondent = role === 'respondent';
  const avatarClass = isRespondent 
    ? 'bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300'
    : 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300';

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
      <p className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-3">
        {role}
      </p>
      
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${avatarClass}`}>
          {player.initials}
        </div>
        <div>
          <p className="text-sm font-medium">{player.name}</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {player.username} · Skill: {player.skillLevel}
          </p>
        </div>
      </div>

      <div className={`rounded-lg p-3 text-xs leading-relaxed mb-3 ${
        isRespondent 
          ? 'bg-yellow-50 dark:bg-yellow-950 border-l-2 border-yellow-400'
          : 'bg-gray-50 dark:bg-gray-900'
      }`}>
        {statement}
      </div>

      {evidence && (
        <>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Evidence attached</p>
          <div className="flex gap-2 flex-wrap mb-3">
            {evidence.matchId && (
              <span className="text-xs px-2 py-1 rounded bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                Match #{evidence.matchId}
              </span>
            )}
            {evidence.attachments?.map((att, i) => (
              <span key={i} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                {att}
              </span>
            ))}
          </div>
        </>
      )}

      <div className="border-t border-gray-200 dark:border-gray-700 my-3"></div>

      <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
        {role === 'reporter' ? 'Reporter history' : 'Respondent history'}
      </p>
      <div className="flex gap-4">
        {Object.entries(player.history).map(([key, value]) => (
          <div key={key}>
            <p className={`text-sm font-medium ${key === 'sustained' ? 'text-green-600 dark:text-green-400' : ''}`}>
              {value}
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
            </p>
          </div>
        ))}
      </div>

      {povSubmitted && (
        <div className="mt-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-2 text-xs text-green-700 dark:text-green-300">
          POV submitted · {povSubmitted}
        </div>
      )}
    </div>
  );
};
