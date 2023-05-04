import pool from '../config/index';
import { Note, NoteResponse, idResponse } from '../interfaces';
import { getAllNotesQuery } from '../queries/getAllNotesQuery';
import { whereId } from '../queries/whereIdEquals';
import { orderById } from '../queries/orderByPlayerId';
import { updatePlayerNoteQuery } from '../queries/updatePlayerNoteQuery';
import { postPlayerNoteQuery } from '../queries/postNoteQuery';

export async function getAllNotes(): Promise<NoteResponse[]> {
    const { rows } = await pool.query(getAllNotesQuery + orderById);
    return rows;
};

export async function getNoteById(id: number): Promise<NoteResponse[]> {
    const getNote = await pool.query(getAllNotesQuery + whereId, [id]);
    return getNote.rows;
};

export async function createNote(note: Note): Promise<idResponse[]> {
    const noteCreated = await pool.query(
        postPlayerNoteQuery,
        [
            note.first_name,
            note.last_name,
            note.user_permission,
            note.team_id,
            note.note,
            note.rating
        ]);
    return noteCreated.rows;
};

export async function updateNoteById(
    id: number, note: string, rating: number
): Promise<idResponse[]> {
    const getNote = await pool.query(updatePlayerNoteQuery, [note, rating, id]);
    return getNote.rows;
};
