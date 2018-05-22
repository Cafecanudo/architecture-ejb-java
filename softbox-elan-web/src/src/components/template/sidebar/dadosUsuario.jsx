import React from 'react'

export default props => (
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src={props.usuario.foto} className="img-circle elevation-2" alt="User Image"/>
      </div>
      <div className="info">
        <a href="#/perfil" className="d-block">{props.usuario.nome}</a>
      </div>
    </div>
  )