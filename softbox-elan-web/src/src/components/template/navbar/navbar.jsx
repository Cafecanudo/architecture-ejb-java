import React, {Component} from 'react'
import Menu from "./menu";
import Badge from "./badge";

export default class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      /*Alterar essas informacoes para serem buscadas do banco de dados*/
      bellslist: [
        {_id: 0, message: 'Mensagem de Email recebida', icon: 'envelope', tempo: 3, tdisplay: 'min'},
        {_id: 1, message: 'Integração Sefaz Falhou', icon: 'file', tempo: 1, tdisplay: 'seg'},
      ],
      links: [
        {link: '/home', display: 'Home'}
      ]
    }
  }

  render() {
    return (
      <nav className="main-header navbar navbar-expand bg-white navbar-light border-bottom">
        <Menu links={this.state.links}/>
        <Badge widgetsAction={this.props.widgetsAction} actionFullscreen={this.props.actionFullscreen} bellslist={this.state.bellslist}/>
      </nav>
    )
  }
}
