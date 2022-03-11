import React from 'react';

class Jumbotron extends React.Component {

  render() {

    return (

        <div className="jumbotron">
            <div className="container">
                <h1 className="display-3">Contáctanos </h1>
                  <p>Llámanos, escríbenos y déjanos saber qué necesitas</p>
                <div className="contacts contact-wrapper">
                      <ul>
                        <span class="hightlight-contact-info">
                          <li class="email-info"><i class="fa fa-envelope" aria-hidden="true"></i> info@demo.com</li>
                          <li><i class="fa fa-phone" aria-hidden="true"></i> <span class="highlight-text">+91 11 1111 2900</span></li>
                        </span>
                      </ul>
                </div>

            </div>
        </div>

    )
    
  }

}

export default Jumbotron;