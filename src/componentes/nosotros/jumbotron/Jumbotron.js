import React from 'react';

class Jumbotron extends React.Component {

  render() {

    return (

        <div className="jumbotron">
            <div className="container">
                <h1 className="display-3">OSV </h1>
                <p>
                    Observatorio de Salud de Villavicencio
                    <br/>
                    Datos e indicadores de salud 
                </p>
            </div>
        </div>

    )
    
  }

}

export default Jumbotron;