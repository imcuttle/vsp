/**
 * @file app
 * @author Cuttle Cong
 * @date 2018/5/10
 * @description
 */

import Layout from './Layout'

class App extends Layout {
  list = () => new Promise(resolve => {
    require.ensure([], () => {
      resolve(require('./list').default)
    })
  })

  detail = () => new Promise(resolve => {
    require.ensure([], () => {
      resolve(require('./detail').default)
    })
  })
}

export default App.create()
