import React from 'react';

import Menu from '../menu/Menu';
import Formulario from './formulario/Formulario';
import Mapa from './mapa/Mapa';
import Footer from '../footer/Footer';
import Jumbotron from './jumbotron/Jumbotron';


class Contacto extends React.Component {

	render() {

		return(

			<>

			<Menu />

			<Jumbotron></Jumbotron>
			

			<br></br>

			<main role="main" className="flex-shrink-0 mt-5">

				<div className="container" margin="15px">

					<h1 className="mb-5">Escríbenos</h1>

            		<div className="row">

            			<div className="col-md-6">
		        
							<Formulario />

						</div>

						<div className="col-md-6">
		        
							<Mapa />

						</div>

					</div>
				</div>	

	  		</main>

	  		<Footer />

	  		</>

		)

	}

}

export default Contacto;