import React from 'react'
import CategoriaRow from './Categoria-Row'

class CategoriaList extends React.Component {
  render() {
    return (
        <div >
          {
            this.props.listado.map((categoria) => {
              return <CategoriaRow  key={categoria.toString()} 
              categoria={categoria} />
            })
          }
        </div>
    )
  }
}

export default CategoriaList