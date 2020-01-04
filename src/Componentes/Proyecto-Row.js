import React from 'react'
import { browserHistory } from 'react-router-3';
import CategoriaList from './Categoria-List';

import {
  TwitterIcon,
  FacebookIcon
} from 'react-share';

class ProyectoRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      proyecto: this.props.proyecto
    };
    this.VistaDetalle = this.VistaDetalle.bind(this);

  }
  VistaDetalle = (e) => {

    browserHistory.push('/Detalle/' + this.state.proyecto.id);
    e.preventDefault();
  }
  render() {
    return (
      <div className="col s12 m6 l4">
        <div class="card z-depth-3">
          <div className="card-image">
            <img src={this.state.proyecto.link} />
            <a href="#top" onClick={this.VistaDetalle} className="btn-floating halfway-fab waves-effect waves-light purple"><i class="material-icons">add</i></a>
          </div>
          <div className="card-content">
            <span className="card-title"><strong>{this.state.proyecto.nombre}</strong></span>
          </div>
          <div className="card-action">
            <div className="row">
              <div className="col s12 m8">
              <CategoriaList listado={this.state.proyecto.categoria}/>
              </div>
              <div className="col s12 m4">
                <div className="divSocial"><a><TwitterIcon size={38} round={true} /></a></div>
                <div className="divSocial"><a><FacebookIcon size={38} round={true} /></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ProyectoRow;