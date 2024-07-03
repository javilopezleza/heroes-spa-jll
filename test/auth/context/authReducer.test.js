import { authReducer } from "../../../src/auth/context/AuthReducer";
import { types } from "../../../src/auth/types/types";

describe('Pruebas en authReducer', () => {

    test('debe de retornar el estado por defecto', () => {

        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });

    });

    test('debe de llamar al login y establecer el user', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Juan',
                id: '123'
            }
        }

        const state = authReducer({logged:false}, action);
        expect(state).toEqual({
            logged:true,
            user:action.payload
        })


    });

    test('debe de borrar el name del usuario y establecer logged en false', () => {

        const state = {
            logged: true,
            user: { id:'123', name:'Juan' }
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer(state, action);

        expect(newState).toEqual({logged:false});
    });


})