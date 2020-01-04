import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Componentes/App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router-3';
import VistaInicio from './Componentes/VistaInicio';
import DetalleProyecto from './Componentes/Detalle-Proyecto';
import RegistroProyecto from './Componentes/Registro-Proyecto';

class Index extends React.Component {
  
    constructor(props) {
      super(props)
    }
    render() {
        return(
            <Router history={browserHistory}>
            <Route
                component={() => <VistaInicio />}
                path="/">
            </Route>
            <Route path="/Vista/Inicio" component={VistaInicio}></Route>
            <Route path="/Detalle/:id" component={DetalleProyecto}></Route>
            <Route path="/Registro/proyecto" component={RegistroProyecto}></Route>
  
          </Router>
          )
      }
      
}

ReactDOM.render(
    <Index/>, document.getElementById('root'));

registerServiceWorker();