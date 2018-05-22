import React from 'react'

export default props => (
  <div key={props.item._id}>
    <a href="#" className="dropdown-item">
      <i className={'fa fa-' + (props.item.icon || '') + ' mr-2'}></i> {props.item.message || ''}
      <span className="float-right text-muted text-sm">{props.item.tempo} {props.item.tdisplay}</span>
    </a>
    <div className="dropdown-divider"></div>
  </div>
)