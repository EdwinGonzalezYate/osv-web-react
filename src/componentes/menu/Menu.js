import React from 'react';
import {NavLink} from "react-router-dom";

class Menu extends React.Component {

  render() {

  	return (

  		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-info">

		    <NavLink to="/" className="navbar-brand">
			
			<a class="navbar-brand" href="#">
				<img src="https://www.artntech.com.co/images-osv/logo.png" alt="img" height="60"/>
			</a>

				</NavLink>
		    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
		     	<span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
			    <ul className="navbar-nav ml-auto">

			        <li className="nav-item">
			          	<NavLink to="/" className="nav-link">Home </NavLink>
			        </li>
			        <li className="nav-item">
			        	<NavLink to="/nosotros" className="nav-link">Nosotros </NavLink>
			        </li>
			        <li className="nav-item">
			          	<NavLink to="/servicios" className="nav-link">Datos de Salud </NavLink>
			        </li>
					<li className="nav-item">
			          	<NavLink to="/publicaciones" className="nav-link">Publicaciones </NavLink>
			        </li>
			        <li className="nav-item">
			          	<NavLink to="/contacto" className="nav-link">Contacto </NavLink>
			        </li>

			    </ul>

			    <form className="form-inline mt-2 mt-md-0">
			        <input className="form-control mr-sm-2" type="text" placeholder="Buscar" aria-label="Buscar"/>
			        <button className="btn btn-primary my-2 my-sm-0" type="submit">Buscar</button>
			    </form>

		    </div>		    

		</nav>

  	)
    
  }

}

export default Menu;