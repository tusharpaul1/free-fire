
export enum TournamentFormat {
  SOLO = 'Solo',
  DUO = 'Duo',
  SQUAD = 'Squad',
}

export enum TournamentStatus {
    UPCOMING = 'Upcoming',
    ONGOING = 'Ongoing',
    COMPLETED = 'Completed',
}

export interface Tournament {
  id: string;
  name: string;
  date: string;
  time: string;
  prizePool: string;
  format: TournamentFormat;
  status: TournamentStatus;
  registeredPlayers: number;
  maxPlayers: number;
  rules: string[];
  schedule: { round: string; time: string }[];
}

export interface Player {
  id: string;
  username: string;
  gameId: string;
  avatarUrl: string;
  stats: {
    kdRatio: number;
    winRate: number;
    matchesPlayed: number;
  };
  teamId?: string;
  matchHistory: {
    tournamentName: string;
    rank: number;
    kills: number;
  }[];
}

export interface Team {
  id: string;
  name: string;
  captainId: string;
  members: string[];
}
