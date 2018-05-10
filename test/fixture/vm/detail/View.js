/**
 * @file View
 * @author Cuttle Cong
 * @date 2018/5/10
 * @description
 */
import * as React from 'react'
import { binding, mapping } from 'react-mobx-vm'


@binding
@mapping({ 'params.id': 'id' })
export default class View extends React.Component {

  render() {
    return <div>
      <h3>Detail</h3>
      <div>
        <label>Name: </label>
        <span>{this.local.name}</span>
      </div>
      <div>
        <label>Email: </label>
        <span>{this.local.email}</span>
      </div>
      <div>
        <label>Phone: </label>
        <span>{this.local.phone}</span>
      </div>
    </div>
  }
}
