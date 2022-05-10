export default function ({ $axios, store }, inject) {
  const api = $axios.create({
    baseURL: `${process.env.API}/api`,
  })

  api.interceptors.request.use(async (config) => {
    config.params = {
      ...config.params,
///
    }

    return config
  })

  api.onResponse((response) => {
    const { config } = response

    if (!config.url.includes('token')) {
      let notification = null

      if (config.method === 'put' || config.method === 'post') {
        notification = {
          type: 'success',
          text: 'Данные сохранены.',
        }
      } else if (config.method === 'delete') {
        notification = {
          type: 'success',
          text: 'Данные удалены.',
        }
      }

      if (notification) store.dispatch('notifications/add', notification)
    }

    return response
  })

  api.onError((error) => {
    const { config, response } = error
    if (!response)
      return store.dispatch('notifications/add', {
        type: 'error',
        text: error,
      })

    // if (response.status === 401 && config.params.route !== '/auth') {
    //   store.dispatch('auth/logout')
    // }
    if (response.status === 403) {
      store.dispatch('notifications/add', {
        type: 'error',
        text: 'Недостаточно прав',
      })
    }

    if (config.method === 'get') {
      store.dispatch('notifications/add', {
        type: 'error',
        text: 'Не удалось загрузить данные',
      })
    }

    if (config.methods === 'post' || config.methods === 'put') {
      store.dispatch('notifications/add', {
        type: 'error',
        text: 'Не удалось сохранить данные',
      })
    }

    return Promise.reject(error)
  })

  inject('api', api)
}
