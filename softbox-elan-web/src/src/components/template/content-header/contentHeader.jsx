import React from 'react'

import Breadcumb from './breadcumb'

export default props => (
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0 text-dark">{props.title}</h1>
        </div>
        <Breadcumb itens={props.breadcumbs}/>
      </div>
    </div>
  </div>
)
