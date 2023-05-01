const pool = require('../config/index').pool;

const getUsers = async (req,res) => {
    try {
        const response = await pool.query('SELECT * FROM category');
        res.status(200).json(response.rows);
    }
    catch(error){
        console.log(error);
        res.send("Error: "+error);
    }
};

module.exports = {
    getUsers
}
