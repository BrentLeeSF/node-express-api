export interface Note {
    id?: number;
    first_name?: string;
    last_name?: string;
    user_permission?: number;
    team_id?: number;
    note: string;
    rating: number;
    create_date?: Date | string;
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