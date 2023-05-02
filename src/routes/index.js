import notesRouter from './notesRouter.js';

export default (app) => {
  app.get('/api/v1/', (req, res) => {
    res.json({ message: 'Awesome api' });
  });

  app.use('/api/v1/', [notesRouter]);
};