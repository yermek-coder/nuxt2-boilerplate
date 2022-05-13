import Vue from 'vue'

Vue.directive('intersection', {
  inserted: (el, binding) => {
    const thrsh = Object.keys(binding.modifiers)[0] / 10
    const options = {
      rootMargin: '0px',
      threshold: thrsh ? thrsh : 1.0,
    }
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const arg = binding?.arg
          if (arg) {
            binding.value(arg)
          } else binding.value()
        }
      })
    }
    if (!window.observers) window.observers = []
    window.observers.push(new IntersectionObserver(callback, options))
    window.observers[window.observers.length - 1].observe(el)
  },
  unbind: () => {
    if (window.observers && window.observers.length) {
      window.observers.forEach((el) => el.disconnect())
    }
    window.observers = []
  },
})
