import Vue from 'vue'

Vue.directive('click-outside', {
  inserted: (el, binding, vnode) => {
    el.clickOutsideEvent = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event)
      }
    }
    document.body.addEventListener('click', el.clickOutsideEvent)
    document.body.addEventListener('touchstart', el.clickOutsideEvent)
  },
  unbind: (el) => {
    document.body.removeEventListener('click', el.clickOutsideEvent)
    document.body.removeEventListener('touchstart', el.clickOutsideEvent)
  },
  stopProp(event) {
    event.stopPropagation()
  },
})
