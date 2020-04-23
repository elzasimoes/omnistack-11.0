const request = require('supertest');
const app = require('../../src/app')

describe(' ONG', () =>{
    it('should be able to create a new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            name: "APAD 2",
	        email: "elzaesimoes@gmail.com",
	        whatsapp: "121231231221",
	        city: "manaus",
	        uf: "am"	
        }); 

        console.log(response.body)
    });
});