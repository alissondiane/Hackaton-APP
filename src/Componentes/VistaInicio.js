import React from 'react';
import ProyectoList from './Proyecto-List'
import $ from 'jquery';
import Carrousel from './Carrousel'
import Nav from './Nav';
import Footer from './Footer';

class VistaInicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vehiculos: []
        }
    }
    componentWillMount() {

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
            .then((alumno) => {
                console.log("Realizando la consulta");
                console.log(alumno);
                var listado = alumno;
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
                this.setState({ vehiculos: proyecto })

            })
            .catch(error => {
                // si hay algún error lo mostramos en consola
                console.error(error)
            });
    }
    render() {
        const { nombres, isLoading, isValid } = this.state;

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
                            <ProyectoList listado={this.state.vehiculos} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default VistaInicio;