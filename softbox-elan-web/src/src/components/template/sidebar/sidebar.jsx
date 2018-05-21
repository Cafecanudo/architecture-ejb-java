import React, {Component} from 'react'

import fotoPessoal from '../../../images/foto.jpg'
import LogoFavicon from './logoFavicon'
import DadosUsuario from './dadosUsuario'
import Menu from "./menu";

export default class Sidebar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      usuario: {
        _id: 1,
        foto: fotoPessoal,
        nome: 'Wellton S. Barros'
      }
    }
  }

  componentDidMount() {
    $('#sidebar-overlay').click(function () {
      $('body').toggleClass('sidebar-open sidebar-collapse');
    })
  }

  render() {
    return (
      <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <LogoFavicon/>
          <div className="sidebar">
            <DadosUsuario usuario={this.state.usuario}/>
            <Menu usuario={this.state.usuario}/>
          </div>

        </aside>
        <div id="sidebar-overlay"></div>
      </div>
    )
  }
}
