describe('Comparadores comunes', () => {
    const user = {
        name: "Roddy",
        lastname: "Vitali"
    };

    const user2 = {
        name: "Roddy",
        lastname: "Vitali"
    };

    const user3 = {
        name: "roddy",
        lastname: "Vitali"
    };

    test('igualdad de elementos', () => {
        expect(user).toEqual(user2);
    });

    test('No son exactacmente iguales', () => {
        expect(user).not.toEqual(user3);
    });
});