import React from 'react'

class ComentarioRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comentario: this.props.comentario
    };
  }
  render() {
    return (
      <div className="col s12 m6 l4">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s12 m4 l5">
              <img src="http://imico.cl/wp-content/uploads/2018/12/4.jpg" alt="" className="circle responsive-img" />
            </div>
            <div class="col s12 m8 l7">
              <span class="black-text text-center">
                <p>"{this.state.comentario.detalle}"</p>
                
                <p>Puntaje: {this.state.comentario.puntaje}</p>  
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ComentarioRow;