import pool from "../config/index.js";

export default class NotesController {
    static getUsers = async (req,res) => {
        try {
            const response = await pool.query('SELECT * FROM user_info');
            res.status(200).json(response.rows);
        }
        catch(error){
            res.send("Error: "+error);
        }
    };
}
