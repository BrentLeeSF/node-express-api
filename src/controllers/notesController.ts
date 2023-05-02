import pool from '../config/index';
import { Note } from '../interfaces';

export default class NotesController {
    static getUsers = async (req: any, res: any) => {
        try {
            const response = await pool.query('SELECT * FROM category');
            const ress: Note[] = response.rows;
            res.status(200).json(ress);
        }
        catch(error){
            res.send("Error: "+error);
        }
    };
}
