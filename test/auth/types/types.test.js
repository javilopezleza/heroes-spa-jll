import { types } from "../../../src/auth/types/types";

describe('pruebas en los types', () => {

    test('debe de retornar estos types', () => {

        expect(types).toEqual({
            login: '[Auth] login',
            logout: '[Auth] logout',
        });

    });


})