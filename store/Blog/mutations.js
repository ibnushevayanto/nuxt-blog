export default {
  SET_DATA(state, payload) {
    state.data = payload
    console.log(state.data)
  },
  ADD_DATA(state, payload) {
    state.data.push(payload)
  },
  EDIT_DATA(state, payload) {
    if (state.data.length > 0) {
      const index = state.data.indexOf(state.data.filter(res => res.id === payload.id)[0])
      state.data[index] = {
        id: payload.id,
        ...payload.data
      }
    }
  }
}
