import React from 'react';

class Servicios extends React.Component {

  render() {

    return (

        <div className="container servicios">

            <div className="row">

                <div className="col-lg-4">
                    
                    <img className="img-fluid" src="https://www.artntech.com.co/images-osv/noticia.webp"/>
                    <h2>Publicación 1</h2>
                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                    <p><a className="btn btn-secondary" href="#" rel="noopener noreferrer" role="button">Leer más &raquo;</a></p>
                </div>

                <div className="col-lg-4">
                    <img className="img-fluid" src="https://www.artntech.com.co/images-osv/noticia.webp"/>
                    <h2>Publicación 2</h2>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                    <p><a className="btn btn-secondary" href="#" rel="noopener noreferrer" role="button">Leer más &raquo;</a></p>
                </div>

                <div className="col-lg-4">
                    <img className="img-fluid" src="https://www.artntech.com.co/images-osv/noticia.webp"/>
                    <h2>Publicación 3</h2>
                    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                    <p><a className="btn btn-secondary" href="#" rel="noopener noreferrer" role="button">Leer más &raquo;</a></p>
                </div>

            </div>

        </div>

    )
    
  }

}

export default Servicios;