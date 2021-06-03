const cliente = {
    nombre: 'Adrian Ibarra',
    balance: 500,
    tipo: 'Premium'
};

describe('Testing al cliente', () => {
    test('Es Adrian Ibarra', () => {
        expect(cliente).toMatchSnapshot(); //toMatchSnapshot para validar todo el OBJ
    });
});




