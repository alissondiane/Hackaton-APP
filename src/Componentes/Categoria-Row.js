import React from 'react'
import { browserHistory } from 'react-router-3';

class CategoriaRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoria: this.props.categoria
    };
  }
  render() {
    return (
      <span className="Categoria purple">
          {this.state.categoria.nombre}
      </span>
    )
  }
}
export default CategoriaRow;