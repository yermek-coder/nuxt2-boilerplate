import gen from '@/utils/vuex/gen_mutations'

export const state = () => ({
  notifications: [],
  timeout: 2000,
})

export const actions = {
  add({ state, commit, dispatch }, { type, text }) {
    const id = Math.random()
    const notification = { type, text, id }

    const temp = [...state.notifications]
    temp.push(notification)

    commit('SET_NOTIFICATIONS', temp)
    setTimeout(() => {
      dispatch('remove', id)
    }, state.timeout)
  },

  remove({ state, commit }, id) {
    const index = state.notifications.findIndex((item) => item.id === id)
    if (index === -1) return

    const temp = [...state.notifications]
    temp.splice(index, 1)
    commit('SET_NOTIFICATIONS', temp)
  },
}

export const mutations = gen(state())
