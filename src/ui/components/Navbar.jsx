import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {

    const { user, logout } = useContext(AuthContext);

    const navigate = useNavigate();


    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        });
    }

    return (


        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <Link
                className="navbar-brand ms-5"
                to="/"
            >
                Asociaciones
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse ms-5" id="navbarNav">
                <div className="navbar-nav">
                    <NavLink
                        className={({ isActive }) => `nav-link nav-item ${isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-link nav-item ${isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `nav-link nav-item ${isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>
            <div className="navbar-collapse float-top collapse order-3 dual-collapse2 d-flex justify-content-center">
                
                    <span className='nav-item nav-link text-info me-3'>
                        {user?.name}
                    </span>

                    <button
                        className='nav-item nav-link btn text-light  p-2'
                        onClick={onLogout}
                    >
                        Logout
                    </button>
            </div>

        </nav>
    )
}

