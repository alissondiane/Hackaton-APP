import React from 'react';

import {
    TwitterIcon,
    FacebookIcon,
    WhatsappIcon,
    EmailIcon
  } from 'react-share';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <footer class="page-footer purple">
                <div class="container">
                    <div class="row">
                        <div class="col l6 s12">
                            <h5 class="white-text">Co-laborando</h5>
                            <p class="grey-text text-lighten-4">

                            Co-laborando es una plataforma peruana que conecta a personas que tienen proyectos sociales y necesitan ayuda, con organizaciones solidarias.
                            </p>
                        </div>
                        <div class="col l4 offset-l2 s12">
                            <h5 class="white-text">Enlaces</h5>
                            <ul>
                                <li><a class="grey-text text-lighten-3" href="/Vista/inicio">Inicio</a></li>
                                <li><a class="grey-text text-lighten-3" href="/Vista/inicio">Proyectos</a></li>
                                <li><a class="grey-text text-lighten-3" href="/Contacto">Contacto</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        © 2019 Mixture
                        <div className="divSocial right"><a><TwitterIcon size={38} round={true} /></a></div>
                        <div className="divSocial right"><a><FacebookIcon size={38} round={true} /></a></div>
                        <div className="divSocial right"><a><EmailIcon size={38} round={true} /></a></div>
                        <div className="divSocial right"><a><WhatsappIcon size={38} round={true} /></a></div>
                       
                    </div>
                </div>
            </footer>
        )
    }
}
//<td className="td">{this.props.pago.idRec}</td>
//<td className="td">{this.props.pago.alumno.idAlum}</td>
export default Footer;