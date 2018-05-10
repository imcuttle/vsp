/**
 * @file localStorage
 * @author Cuttle Cong
 * @date 2018/5/10
 * @description
 */

export default function (opt) {
  return {
    save(uid, store) {
      localStorage.setItem(uid, JSON.stringify(store))
    },
    fetch(uid) {
      let str = localStorage.getItem(uid)
      try {
        return JSON.parse(str)
      } catch (e) {
        return null
      }
    }
  }
}
