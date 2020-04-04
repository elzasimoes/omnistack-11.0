const connection = require('../database/connection')

module.exports = {
    async index(request, response){
       const { id } = request.body;

       const ong = await connection('ongs')
       .where('id', id)
       .select('name')
       .first();

       if(!ongs) {
           return response.status(400).json({ error: 'NO ONG FOUND WITH THIS ID '})
       }

       return response.json(ong);
    }
}