import React from 'react';

import Menu from '../menu/Menu';

import Footer from '../footer/Footer';
import Category from '../category/Category';
import Jumbotron from '../nosotros/jumbotron/Jumbotron';


class Servicios extends React.Component {

	render() {

		return(

			<>

			<Menu />
			
			<br></br>
			<main role="main" className="flex-shrink-0 mt-5">
				
				<section className="text-center">
				    <div className="container">
				      <h1 className="jumbotron-heading">Datos de salud </h1>
				      <p className="lead text-muted">
				      	A continuación los datos de salud pública
				      </p>				      
				    </div>
				</section>
				
				<Category></Category>
				
				<br></br>
				<section>

				
				<div className="container">

					<div className="card">
						<div className="card-body">
							<h5 className="card-title">Seguridad Alimentaria y Nutricional</h5>
							<p className="card-text">En esta sección encontrará el análisis demográfico de Villavicencio, según su estructura poblacional por sexo y edad. Igualmente, información de estadísticas vitales como nacimientos y defunciones; indicadores de fecundidad y mortalidad, útiles para el seguimiento y estimación de tendencias propias de la ciudad.</p>
							
							<ul className="list-group list-group-flush">
							
            
            
            
            
            
            
								<li className="list-group-item"><a href="./subcategory.html" class="collection-item">Pirámide poblacional en Bogotá D.C. 2005, 2018 y 2021.</a></li>
								<li className="list-group-item"><a href="#!" class="collection-item">Tasa bruta de mortalidad en Bogotá D.C.</a></li>
								<li className="list-group-item"><a href="#!" class="collection-item">Tasa de mortalidad infantil en Bogotá D.C.</a></li>
								<li className="list-group-item"><a href="#!" class="collection-item">Tasa de mortalidad en menores de 5 años en Bogotá D.C.</a></li>
								<li className="list-group-item"><a href="#!" class="collection-item">Tasa global y general de fecundidad en Bogotá D.C.</a></li>
								<li className="list-group-item"><a href="#!" class="collection-item">Pirámide poblacional en Bogotá D.C. 2005, 2018 y 2021.</a></li>
							</ul>
							<div className="card-body">
								<a href="./contacto" className="card-link">Contáctanos</a>
								<a href="#" className="card-link">Compartir</a>
							</div>

							<p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
						</div>

						<div className="row">
							<div className="col-sm-6">
							<img src="https://www.artntech.com.co/images-osv/segalimentaria.png" class="card-img-top" alt="..."/>
							</div>
							<div className="col-sm-6">
								<div className="card">
								<div className="card-body">
									<h5 className="card-title">Seguridad Alimentaria y Nutricional</h5>
									<p className="card-text">En esta sección encontrará el análisis demográfico de Bogotá D.C., según su estructura poblacional por sexo y edad. Igualmente, información de estadísticas vitales como nacimientos y defunciones; indicadores de fecundidad y mortalidad, útiles para el seguimiento y estimación de tendencias propias de la ciudad.</p>
								</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				</section>

				
	  		</main>

	  		<Footer />

	  		</>

		)

	}

}

export default Servicios;