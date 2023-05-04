export interface Note {
    first_name?: string;
    last_name?: string;
    user_permission?: number;
    team_id?: number;
    note: string;
    rating: number;
}

export interface NoteResponse {
    player_id: number;
    name: string;
    nba_discipline: string;
    team_name: string;
    conference_name: string;
    rating: number;
    note: string;
    date: Date | string;
}

export interface idResponse {
    id: number;
}