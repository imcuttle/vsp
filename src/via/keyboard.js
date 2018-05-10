/**
 * @file keyboard
 * @author Cuttle Cong
 * @date 2018/5/10
 * @description
 */

export default function keyboard(vsp) {
  document.addEventListener('keydown', evt => {
    // cmd/ctrl + shift + S
    if (evt.shiftKey && (evt.metaKey || evt.ctrlKey) && evt.key === 's') {
      vsp.generateShared()
         .then(sharedUrl => {
           console.log(sharedUrl)
         })
    }
  })

}
