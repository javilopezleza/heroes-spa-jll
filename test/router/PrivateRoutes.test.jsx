import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from '../../src/heroes/routes/PrivateRoute';



describe('Pruebas en <PrivateRoutes />', () => {

    test('debe mostrar el children si esta logeado', () => {

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'Juan carlos'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>

            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalled(); 

    });


})