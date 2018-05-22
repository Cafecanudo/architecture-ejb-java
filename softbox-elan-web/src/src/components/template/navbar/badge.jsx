import React from 'react'

import BadgeBellItem from './badge-bell-item'

export default props => {

  const bells = () => {
    const list = props.bellslist || []
    return list.map(_m => (
      <BadgeBellItem key={_m._id} item={_m}/>
    ))
  }

  const widgetAlerta = () => {
    props.widgetsAction(0, 'danger');
  }

  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#">
          <i className="fa fa-tasks" aria-hidden="true"></i>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">

          {/*{_id: 0, message: 'Mensagem de Email recebida', icon: 'envelope', tempo: 3, tdisplay: 'min'},
        {_id: 1, message: 'Integração Sefaz Falhou', icon: 'file', tempo: 1, tdisplay: 'seg'},*/}
          <BadgeBellItem item={{_id: 0, message: 'Widget Alerta', icon: 'bolt'}} click={widgetAlerta}/>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#">
          <i className="fa fa-bell-o"></i>
          <span className="badge badge-warning navbar-badge">{props.bellslist.length}</span>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span className="dropdown-header">
              {props.bellslist.length} Notifica{props.bellslist.length > 1 ? 'ções' : 'ção'}
              </span>
          <div className="dropdown-divider"></div>
          {bells()}
          <a href="#" className="dropdown-item dropdown-footer">Ver todas as notificações</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" style={{cursor: 'pointer'}} title="Modo Televisão"
           onClick={props.actionFullscreen}>
          <i className="fa fa-television" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  )
}
