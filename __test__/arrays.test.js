import { arrayFruits, arrayColors } from '../arrays';

describe('Comprabaremos que existe un elemento', () => {
    test('¿Contiene un Platano?', () => {
        expect(arrayFruits()).toContain('platano');
    });

    test('No contiene un Tomate', () => {
        expect(arrayFruits()).not.toContain('tomate');
    });

    test('Comprobar el tamaño de un arreglo', () => {
        expect(arrayFruits()).toHaveLength(6);
    });

    test('Comprobaremos que existe un color', () => {
        expect(arrayColors()).toContain('azul');
    });
});