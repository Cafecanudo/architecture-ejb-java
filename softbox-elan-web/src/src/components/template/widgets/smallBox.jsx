import React from 'react'

export default props => (
  <div className={"small-box bg-" + props.item.type}>
    <div className="inner">
      <h3>{props.item.value}</h3>
      <p>{props.item.display}</p>
    </div>
    <div className="icon">
      <i className="ion ion-bag"></i>
    </div>
    <a href={'#' + props.item.url} className="small-box-footer">Mais <i className="fa fa-arrow-circle-right"></i></a>
  </div>
)