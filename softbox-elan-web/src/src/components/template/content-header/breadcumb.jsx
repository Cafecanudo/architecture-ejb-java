import React from 'react'

export default props => {

  const loadItens = () => {
    return (props.itens || []).map((_it, i) => {
      const last = props.itens[props.itens.length - 1].display === _it.display;
      return (
        <li key={i} className={'breadcrumb-item ' + (last ? 'active' : '')}>
          {!last ? <a href={'#' + _it.url}>{_it.display}</a> :
            _it.display
          }
        </li>
      )
    })
  }

  return (
    <div className="col-sm-6">
      <ol className="breadcrumb float-sm-right">
        {loadItens()}
      </ol>
    </div>
  )
}