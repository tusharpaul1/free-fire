
import { Tournament, Player, TournamentFormat, TournamentStatus } from './types';

export const MOCK_TOURNAMENTS: Tournament[] = [
  {
    id: 't1',
    name: 'Weekly Warriors Clash',
    date: 'July 28, 2024',
    time: '18:00 GMT',
    prizePool: '10,000 Diamonds',
    format: TournamentFormat.SQUAD,
    status: TournamentStatus.UPCOMING,
    registeredPlayers: 88,
    maxPlayers: 100,
    rules: ['Bermuda Map Only', 'No emulators allowed', 'All weapons allowed'],
    schedule: [{ round: 'Finals', time: '18:00 GMT' }],
  },
  {
    id: 't2',
    name: 'Solo Survival Challenge',
    date: 'July 29, 2024',
    time: '20:00 GMT',
    prizePool: '$100 Gift Card',
    format: TournamentFormat.SOLO,
    status: TournamentStatus.UPCOMING,
    registeredPlayers: 45,
    maxPlayers: 50,
    rules: ['Kalahari Map', 'Snipers & Shotguns only', 'Check-in 30 mins prior'],
    schedule: [
      { round: 'Qualifier 1', time: '20:00 GMT' },
      { round: 'Finals', time: '21:00 GMT' },
    ],
  },
  {
    id: 't3',
    name: 'Duo Destruction Derby',
    date: 'August 1, 2024',
    time: '19:00 GMT',
    prizePool: '5,000 Diamonds',
    format: TournamentFormat.DUO,
    status: TournamentStatus.UPCOMING,
    registeredPlayers: 30,
    maxPlayers: 40,
    rules: ['Purgatory Map', 'Standard competitive rules'],
    schedule: [{ round: 'Finals', time: '19:00 GMT' }],
  },
   {
    id: 't4',
    name: 'Mid-Week Mayhem',
    date: 'July 24, 2024',
    time: '17:00 GMT',
    prizePool: '$50 Prize',
    format: TournamentFormat.SQUAD,
    status: TournamentStatus.ONGOING,
    registeredPlayers: 96,
    maxPlayers: 100,
    rules: ['Standard rules', 'All maps enabled'],
    schedule: [{ round: 'Finals', time: '17:00 GMT' }],
  },
  {
    id: 't5',
    name: 'June Championship Finals',
    date: 'June 30, 2024',
    time: '16:00 GMT',
    prizePool: '$500 Grand Prize',
    format: TournamentFormat.SQUAD,
    status: TournamentStatus.COMPLETED,
    registeredPlayers: 100,
    maxPlayers: 100,
    rules: ['Pro league ruleset', 'Official stream coverage'],
    schedule: [{ round: 'Finals', time: '16:00 GMT' }],
  },
];

export const MOCK_PLAYER: Player = {
  id: 'p1',
  username: 'Phoenix_Gamer',
  gameId: '1234567890',
  avatarUrl: 'https://picsum.photos/200',
  stats: {
    kdRatio: 2.5,
    winRate: 22,
    matchesPlayed: 450,
  },
  teamId: 'team1',
  matchHistory: [
    { tournamentName: 'June Championship', rank: 3, kills: 12 },
    { tournamentName: 'Weekly Warriors #12', rank: 1, kills: 18 },
    { tournamentName: 'Solo Survival #5', rank: 15, kills: 4 },
  ],
};

export const MOCK_LEADERBOARD: Omit<Player, 'matchHistory' | 'teamId'>[] = [
    { id: 'p2', username: 'Shadow_Strike', gameId: '2345678901', avatarUrl: 'https://picsum.photos/201', stats: { kdRatio: 4.1, winRate: 35, matchesPlayed: 600 } },
    { id: 'p3', username: 'Viper_Venom', gameId: '3456789012', avatarUrl: 'https://picsum.photos/202', stats: { kdRatio: 3.8, winRate: 31, matchesPlayed: 550 } },
    { id: 'p1', username: 'Phoenix_Gamer', gameId: '1234567890', avatarUrl: 'https://picsum.photos/200', stats: { kdRatio: 2.5, winRate: 22, matchesPlayed: 450 } },
    { id: 'p4', username: 'Blaze_Runner', gameId: '4567890123', avatarUrl: 'https://picsum.photos/203', stats: { kdRatio: 2.3, winRate: 20, matchesPlayed: 480 } },
    { id: 'p5', username: 'Arctic_Fox', gameId: '5678901234', avatarUrl: 'https://picsum.photos/204', stats: { kdRatio: 2.1, winRate: 18, matchesPlayed: 410 } },
];
