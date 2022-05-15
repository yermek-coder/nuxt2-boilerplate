export default function ({ $axios, store }, inject) {
  const api = $axios.create({
    
  })
  api.setBaseURL(`${process.env.API}/api`)

  inject('api', api)
}
