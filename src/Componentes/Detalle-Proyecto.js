import React from 'react';
import PROYECTOS from './Data-proyecto';
import Footer from './Footer';
import ComentarioList from './Comentario-List'
import CategoriaList from './Categoria-List';

class DetalleProyecto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.params.id,
      proyectoDetalle: {},
      categorias: [],
      comentarios: []
    };
 }
  componentWillMount() {
    //DATA DE PRUEBAS 
    var proyectoRecibido = PROYECTOS[this.state.id - 1];
    console.log(PROYECTOS);

    this.setState({
      proyectoDetalle: proyectoRecibido,
      categorias: proyectoRecibido.categoria,
      comentarios: proyectoRecibido.comentarios
    })
    //Consulta API REST
    fetch('https://hackatonesan.herokuapp.com/proyecto/' + this.state.id)
      .then((response) => {
        return response.json()
      })
      .then((data) => {

        console.log("Data recibida de la consultas");
        console.log(data);
        var listado = data.categoria;
        var listado2 = data.comentarios;
        var opcionesCategorias = [];
        var opcionesComentarios = [];
        for (let i = 0; i < listado.length; i++) {
          var id = listado[i].id;
          var nombre = listado[i].nombre;
          var option = { id: id, nombre: nombre };
          opcionesCategorias.push(option);
        }
        for (let i = 0; i < listado2.length; i++) {
          var detalle = listado2[i].detalle;
          var puntaje = listado2[i].puntaje;
          var option2 = { detalle: detalle, puntaje: puntaje };
          opcionesComentarios.push(option2);
        }
        this.setState({
          proyectoDetalle: data,
          categorias: opcionesCategorias,
          comentarios: opcionesComentarios
        })

      })
      .catch(error => {
        console.error(error)
      });
  }

  render() {
    return (

      <div className="">
        <nav className="purple">
          <div className="container">
            <div id="top" class="nav-wrapper">
              <a href="#" class="brand-logo">Co-laborando</a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="/Vista/Inicio"><i class="material-icons left">home</i>INICIO</a></li>
                <li><a href="#"><i class="material-icons left">phone</i>CONTÁCTANOS</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <hr />
        <div className="portada">
          <img className="responsive-img" src={this.state.proyectoDetalle.link} />
        </div>
        <div className="headDetalleProyecto">
          <p>{this.state.proyectoDetalle.nombre}</p>
        </div>
        <div className="row">
          <div className="col s12 m6 l6">
            <img class=" responsive-img" src="https://blog.oxfamintermon.org/wp-content/uploads/2018/10/ayuda-social.jpg" />
          </div>
          <div className="col s12 m6 l6">
            <div className="containerDetalle">
              <label className="labels">Organización</label>
              <span >{this.state.proyectoDetalle.organizacion}</span>
              <br></br>
              <label className="labels" >Descripción</label>
              <span>{this.state.proyectoDetalle.descripcion}</span>
              <br></br>
              <label className="labels" >Objetivo</label>
              <span>{this.state.proyectoDetalle.objetivo}</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div className="col s12 m6 l6">
            <div className="containerDetalle">
              <label className="labels">Ubicación</label>
              <span >{this.state.proyectoDetalle.ubicacion}</span>
              <br></br>
              <label className="labels" >Correo</label>
              <span>{this.state.proyectoDetalle.correo}</span>
              <br></br>
              <label className="labels" >Teléfono</label>
              <span>{this.state.proyectoDetalle.telefono}</span>
            </div>
          </div>
          <div className="col s12 m6 l6">
            <img class=" responsive-img" src="https://images.unsplash.com/photo-1478476868527-002ae3f3e159?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" />

          </div>
        </div>

        <div className="headDetalleProyecto">
          <p>COMENTARIOS</p>
        </div>
        <div className="row center-xs">
          <div className="container">
            <ComentarioList listado={this.state.comentarios} />
          </div>
        </div>
        <div className="headDetalleProyecto">
          <p>CATEGORÍAS</p>
        </div>
        <div className="row center-xs">
          <div className="container">
            <div className="container-categoria">
              <CategoriaList listado={this.state.categorias} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DetalleProyecto;