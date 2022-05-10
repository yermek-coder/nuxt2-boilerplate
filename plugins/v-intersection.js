import Vue from 'vue'

Vue.directive('intersection', {
  inserted: (el, binding) => {
    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    }
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting) {
        binding.value()
      }
    }

    window.observer = new IntersectionObserver(callback, options)
    window.observer.observe(el)
  },
  unbind: () => {
    window.observer.disconnect()
  },
})
