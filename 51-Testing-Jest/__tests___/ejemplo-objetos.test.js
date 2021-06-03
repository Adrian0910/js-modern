
const cliente = {
    nombre: 'Adrian',
    balance: 500
};

describe('Testing al cliente', () => {
    test('El cliente es premium', () => {
        expect(cliente.balance).toBeGreaterThan(400);
    });

    test('Es Adrian', () => {
        expect(cliente.nombre).toBe('Adrian');
    });

    test('No es otro cliente', () => {
        expect(cliente.nombre).not.toBe('Juan Pablo');
    });

    test('No tiene 500', () => {
        expect(cliente.nombre).not.toBe(400);
    });
})


