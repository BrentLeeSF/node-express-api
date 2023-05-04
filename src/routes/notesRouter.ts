
import express, { Request, Response } from 'express';
import { getAllNotes, createNote, getNoteById, updateNoteById } from '../controllers/notesController';
import { Note, NoteResponse } from '../interfaces';

const app = express();
app.use(express.json());


/**
 * Get All Notes
 * @return returns all notes
 */
app.get('/notes', async (req: Request, res: Response) => {
  try {
    const noteResponse: NoteResponse[] = await getAllNotes();
    res.status(200).json(noteResponse);
  }
  catch(error) {
    res.send("Error: "+error);
  }
});


/**
 * Get Note By Id
 * @param id of note
 * @returns note by id
 */
app.get('/note/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const noteResponse: NoteResponse = await getNoteById(+id);
    res.status(200).json(noteResponse);
  }
  catch(error) {
    res.send("Error: "+error);
  }
});


/**
 * Post Note
 * @augments body to create note
 * @returns note created
 */
app.post('/note', async (req: Request, res: Response) => {
  try {
    const noteRequest: Note = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      user_permission: req.body.user_permission,
      team_id: req.body.team_id,
      note: req.body.note,
      rating: req.body.rating
    }
    const noteResponse = await createNote(noteRequest);
    res.status(200).json(noteResponse);
  }
  catch(error) {
    res.send("Error: "+error);
  }
});


/**
 * Update Note
 * @param id of note to update
 * @returns updated note
 */
app.put('/note/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { note, rating } = req.body;
    const noteResponse = await updateNoteById(+id, note, +rating);
    res.status(200).json(noteResponse);
  }
  catch(error) {
    res.send("Error: "+error);
  }
});

export default app;
