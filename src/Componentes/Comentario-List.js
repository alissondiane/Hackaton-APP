import React from 'react'
import ComentarioRow from './Comentario-row'

class ComentarioList extends React.Component {
  render() {
    return (
        <div class>
          {
            this.props.listado.map((comentario) => {
              return <ComentarioRow  key={comentario.toString()} 
              comentario={comentario} />
            })
          }
        </div>
    )
  }
}

export default ComentarioList