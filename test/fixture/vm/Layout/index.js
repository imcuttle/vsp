/**
 * @file index
 * @author Cuttle Cong
 * @date 2018/5/10
 * @description
 */
import { bindView, Root, observable } from 'react-mobx-vm'

import View from './View'

import vspVM from '../../../../src/adaptor/vm'
import vsp from '../../../../src/index'
import keyboard from '../../../../src/via/keyboard'

const vspInstance = vsp()
keyboard(vspInstance)

@bindView(vspVM(vspInstance)(View))
export default class Layout extends Root {
  @observable showFooter = true
  @observable showHeader = true

  @observable content = 'content'
}
