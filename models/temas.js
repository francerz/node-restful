const db = require('../dbconnection');

class TemasModel {
    static async consultar() {
        let query = db('temas');
        return await query;
    }
}

module.exports = TemasModel;