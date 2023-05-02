import express from 'express';
import NotesController from '../controllers/notesController.js';

const router = express.Router();

router
  .route('/notes')
  .get(NotesController.getUsers);

export default router;
