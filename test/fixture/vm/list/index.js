/**
 * @file index
 * @author Cuttle Cong
 * @date 2018/5/10
 * @description
 */
import { bindView, List, Root, observable } from 'react-mobx-vm'
import Person from '../Person'
import View from './View'

@bindView(View)
export class ListPage extends Root {
  @observable
  list = List.create([], Person)

  init() {
    fetch('http://localhost:3000/users', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(json => {
        this.list.assign(json)
      })
  }

  @observable person = Person.create({
    name: 'cuttle',
    email: 'moyuyc95@gmail.com',
    phone: '88888'
  })
}

export default ListPage.create()
