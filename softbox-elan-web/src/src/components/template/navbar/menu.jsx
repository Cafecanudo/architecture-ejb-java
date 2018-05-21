import React from 'react'

export default props => {

  const collapseMenu = () => {
    $('body').toggleClass('sidebar-open sidebar-collapse')
  };

  const link = () => {
    const list = props.links || []
    return list.map(_m => (
      <li key={null} className="nav-item d-none d-sm-inline-block">
        <a href={'#' + _m.display} className="nav-link">{_m.display}</a>
      </li>
    ))
  };

  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" onClick={collapseMenu} style={{cursor: 'pointer'}}>
          <i className="fa fa-bars"></i>
        </a>
      </li>
      {link()}
    </ul>
  )
}
