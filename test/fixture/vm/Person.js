/**
 * @file Person
 * @author Cuttle Cong
 * @date 2018/5/10
 * @description
 */
import { observable, Root } from 'react-mobx-vm'

export default class Person extends Root {
  @observable id = ''
  @observable name = ''
  @observable email = ''
  @observable phone = ''
}
