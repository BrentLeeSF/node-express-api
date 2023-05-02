import notesRouter from '../routes/notesRouter';

export default (app: any) => {
  app.get('/api/v1/', (req: any, res: any) => {
    res.json({ message: 'Awesome api' });
  });

  app.use('/api/v1/', [notesRouter]);
};