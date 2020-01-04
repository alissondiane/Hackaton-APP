import React from 'react';
import ProyectoList from './Proyecto-List'
import Carrousel from './Carrousel'
import Nav from './Nav';
import Footer from './Footer';
import PROYECTOS from './Data-proyecto';


class VistaInicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            proyectos: []
        }
    }
    componentWillMount() {
        //DATA PRUEBA
        this.setState({ proyectos: PROYECTOS })

        //Consulta API REST
        fetch('https://hackatonesan.herokuapp.com/proyecto/list',
            {
                headers: {
                    'Accept': 'application/json',
                },
                method: 'GET'
            }
        )
            .then((response) => {
                console.log("Respuesta de JSON")
                return response.json();
            })
            .then((respuesta) => {
                console.log("Realizando la consulta");
                console.log(respuesta);
                var listado = respuesta;
                var proyecto = [];

                for (let i = 0; i < listado.length; i++) {
                    var id = listado[i].id;
                    var nombre = listado[i].nombre;
                    var categoria = listado[i].categoria;
                    var categorias = []
                    for (let i = 0; i < categoria.length; i++) {
                        var nombreCat = categoria[i];
                        var opcion = { nombre: nombreCat };
                        categorias.push(opcion);
                    }
                    var link = listado[i].link;
                    var option = { id: id, nombre: nombre, categoria: categorias, link: link };
                    proyecto.push(option);
                }
                console.log(proyecto)
                this.setState({ proyectos: proyecto })

            })
            .catch(error => {
                console.error(error)
            });
            
    }
    render() {
        return (
            <div className="">
                <Nav />
                <hr />
                <Carrousel />
                <div className="card-panel  lighten-4  headProyectos">
                    <p>PROYECTOS DE LA SOCIEDAD CIVIL</p>
                </div>

                <div className="containerCards">
                    <div className="container">
                        <div className="row container">
                            <nav>
                                <div className="nav-wrapper purple">
                                    <form>
                                        <div className="input-field">
                                            <input id="search" type="search" required />
                                            <label class="label-icon" for="search"><i className="material-icons">search</i></label>
                                            <i className="material-icons">close</i>
                                        </div>
                                    </form>
                                </div>
                            </nav>
                        </div>
                        <div className="row">
                            <ProyectoList listado={this.state.proyectos} /> 
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default VistaInicio;