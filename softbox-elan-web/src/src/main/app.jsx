import React from 'react'

import '../@core/dependencies'

export default p => (
    <div className="container">

        {/* Navbar */}
        <nav className="main-header">

            {/* left menu */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#"><i className="fa fa-bars"></i></a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="index3.html" className="nav-link">Home</a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="#" className="nav-link">Contato</a>
                </li>
            </ul>


        </nav>
    </div>
)
