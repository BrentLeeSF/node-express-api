
import express, { Request, Response } from 'express';
import { getAllNotes, createNote, getNoteById, updateNoteById } from '../controllers/notesController';
import { Note, NoteResponse, idResponse } from '../interfaces';

const app = express();
app.use(express.json());


/**
 * Get All Notes
 * @return returns all notes
 */
app.get('/notes', async (req: Request, res: Response) => {
  try {
    const noteResponse: NoteResponse[] = await getAllNotes();
    if (!noteResponse) {
      res.status(404).send("Error: There was an error getting notes");
    }
    res.status(200).json(noteResponse);
  }
  catch(error) {
    res.status(500).send("Error getting notes: "+error);
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
    if (!id) {
      res.status(400).send("Error: No id was given");
    }
    const noteResponse: NoteResponse[] = await getNoteById(+id);
    if (!noteResponse) {
      res.status(404).send(`Error: No Note was found with id ${id}`);
    }
    res.status(200).json(noteResponse);
  }
  catch(error) {
    res.status(500).send("Error getting note by id: "+error);
  }
});


/**
 * Post Note
 * @augments body to create note
 * @returns note created
 */
app.post('/note', async (req: Request, res: Response) => {
  try {
    const { first_name, last_name, user_permission, team_id,note, rating } = req.body;
    if (!first_name || !last_name || !user_permission || !team_id || !note || !rating) {
      res.status(400).send("Error: The information to create a note is not valid");
    }
    const noteRequest: Note = {
      first_name,
      last_name,
      user_permission,
      team_id,
      note,
      rating
    }
    const postNoteResponseId: idResponse[] = await createNote(noteRequest);
    if (!postNoteResponseId) {
      res.status(404).send("Error: There was an error creating a note");
    }
    res.status(200).json(postNoteResponseId);
  }
  catch(error) {
    res.status(500).send("Error creating note: "+error);
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
    if (!id) {
      res.status(400).send("Error: No id was given");
    }
    const { note, rating } = req.body;
    if (!note || !rating) {
      res.status(400).send("Error: note or rating was not given");
    }
    const noteResponseId: idResponse[] = await updateNoteById(+id, note, +rating);
    if (!noteResponseId) {
      res.status(404).send(`Error: There was an error updating note with id ${id}`);
    }
    res.status(200).json(noteResponseId);
  }
  catch(error) {
    res.status(500).send("Error updating note: "+error);
  }
});

export default app;
