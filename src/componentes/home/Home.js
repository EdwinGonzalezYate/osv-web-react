import React from 'react';

import Menu from '../menu/Menu';
import Slider from './slider/Slider';
import Servicios from './servicios/Servicios';
import Footer from '../footer/Footer';
import BrandSlider from '../sliderbrand/BrandSlider';
import CategorySlider from '../category/Category';


class Home extends React.Component {

	render() {

		return(

			<>

			<Menu />

			<main role="main" className="flex-shrink-0 mt-5">
			
			<Slider />
			
			<br></br>
			<div className="row justify-content-center">
				<h1 className="h1 display-4">Datos de salud</h1>
				
			</div>
			<div className="row justify-content-center">
			<p className="lead text-muted">
				      	A continuación los datos de salud pública municipal
				      </p>	
				
			</div>
			
			<br></br>

			<CategorySlider></CategorySlider>

			<div className="container">

			<br></br>
			<br></br>
			<div className="row justify-content-center">
				<h1 className="h1 display-4">Últimas publicaciones</h1>
			</div>
			
				
				<Servicios />

				<hr className="featurette-divider" />

			</div>

				<div className="container">
					
					<BrandSlider></BrandSlider>
					</div>

	  		</main>

	  		<Footer />

	  		</>

		)

	}

}

export default Home;