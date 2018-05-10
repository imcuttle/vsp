/**
 * @file index
 * @author Cuttle Cong
 * @date 2018/5/10
 * @description
 */
/**
 * @file index
 * @author Cuttle Cong
 * @date 2018/2/16
 * @description
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { h, providerFactory } from 'react-mobx-vm'
import Router from 'react-mobx-vm/packages/RouterV3'
import app from './app'
import { hashHistory } from 'react-router'

const Provider = providerFactory(app)

const routes = {
  path: '/',
  component: app,
  indexRoute: {
    // NOTE: `getComponent`
    getComponent: app.list
  },
  childRoutes: [
    {
      path: 'detail/:id',
      // NOTE: `getComponent`
      getComponent: app.detail
    }
  ]
}

ReactDOM.render(
  <Provider>
    <Router routes={routes} history={hashHistory} />
  </Provider>,
  window.root
)
