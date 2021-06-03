import { expect } from '@jest/globals';
import Citas from '../js/classes/Citas'

describe('Probar la clase de citas', () => {
    
    const citas = new Citas();

    const id = Date.now();
    
    test('Agregar nueva cita', () => {
        const citaObj = {
            id,
            mascota: 'Hook',
            propietario: 'Adrian',
            telefono: '53269877',
            fecha: '10-12-2020',
            hora:'10:43',
            sintomas: 'soilo duerme'
        };
        citaObj.id = DAte.now();

        citas.agregarCita(citaObj);

        //Prueba
        expect(citas).toMatchSnapshot();
    });


    test('Actualizar cita', () => {
        const citaActualizada = {
            id,
            mascota: 'Nuevo nombre',
            propietario: 'Adrian',
            telefono: '53269877',
            fecha: '10-12-2020',
            hora:'10:43',
            sintomas: 'soilo duerme'
        };

        citas.editarCita(citaActualizada);

        expect(citas).toMatchSnapshot();
    });
    test('Eliminar cita', () => {
        citas.eliminarCita(id);

        expect(citas).toMatchSnapshot();
    });
});



