const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4', 'Producto 5'];

describe('Testing al carrito de compras', () => {
    test('Probar que el array tenga 5 elementos', () => {
        expect( carrito ).toHaveLength(5);
    });

    test('Verificar que el carrito no este vacio', () => {
        expect( carrito ).not.toHaveLength(0);
    })
});



