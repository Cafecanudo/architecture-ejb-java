import React, {Component} from 'react'

import BadgeBellItem from './badge-bell-item'

export default props => {

  const bells = () => {
    const list = props.bellslist || []
    return list.map(_m => (
      <BadgeBellItem key={_m._id} item={_m}/>
    ))
  }

  return (
    <ul className="navbar-nav ml-auto">
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
    </ul>
  )
}
