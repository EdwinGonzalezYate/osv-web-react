import React from 'react';
import ReactDOM from 'react-dom'; 
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; 
import './index.css';

import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

// Páginas del Sitio Web
import Home from './componentes/home/Home'; 
import Nosotros from './componentes/nosotros/Nosotros';
import Servicios from './componentes/servicios/Servicios';
import Contacto from './componentes/contacto/Contacto';
import Publicaciones from './componentes/home/publicaciones/Publicaciones';


// Configuración de la rutas del Sitio Web 
ReactDOM.render(
    <Router>
	    <div>
	    	<Switch>

		        {/* Páginas */}
		        <Route exact path='/' component={Home} />
		        <Route path='/nosotros' component={Nosotros} />
		        <Route path='/servicios' component={Servicios} /> 
				<Route path='/publicaciones' component={Publicaciones} /> 
		        <Route path='/contacto' component={Contacto} /> 

	      	</Switch>
	    </div>
    </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
