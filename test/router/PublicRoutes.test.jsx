import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import { useContext } from "react";
import { AuthContext } from "../../src/auth";
import { PublicRoutes } from "../../src/heroes/routes/PublicRoutes";


describe('pruebas en <PublicRoutes />', () => {

    test('debe mostrar el children si no esta logeado', () => {

        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoutes>
                    <h1>Ruta pública</h1>
                </PublicRoutes>

            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta pública')).toBeTruthy()

    });


    test('debe de navegar si esta logeado', () => {

        const contextValue = {
            logged: true,
            user: {
                name: 'Knosil',
                id: 'ABC123'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoutes>
                                <h1>Ruta pública</h1>
                            </PublicRoutes>
                        } />
                        <Route path='marvel' element={<h1>Página Marvel</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>

        );

        expect(screen.getByText('Página Marvel')).toBeTruthy();

    });

})