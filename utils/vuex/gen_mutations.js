export default (state) => {
  const mutations = {}
  for (const key in state) {
    mutations[`SET_${key.toUpperCase()}`] = function (state, payload) {
      state[key] = payload
    }
  }

  return mutations
}
