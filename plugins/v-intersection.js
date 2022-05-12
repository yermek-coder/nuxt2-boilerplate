import Vue from 'vue'

Vue.directive('intersection', {
  inserted: (el, binding) => {
    const options = {
      rootMargin: '0px',
      threshold: 0.9,
    }
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const args = entry.target?.dataset?.intersection_args
          if (args && args.length) {
            binding.value(...args)
          } else binding.value()
        }
      })
      // if (entries[0].isIntersecting) {
      //   binding.value()
      // }
    }
    if (window.observer) {
      window.observer.observe(el)
      return
    }
    window.observer = new IntersectionObserver(callback, options)
    window.observer.observe(el)
  },
  unbind: () => {
    window.observer.disconnect()
  },
})
