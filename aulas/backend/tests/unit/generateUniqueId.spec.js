const generateUniqueID = require('../../src/utils/genereteUniqueId');

describe('Generete Unique ID', () => {
    it('should generete an unique ID', () => {
        const id = generateUniqueID();

        expect(id).toHaveLength(8);
    });
});