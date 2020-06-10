export default {
  SET_DATA(state, payload) {
    state.data = payload
    console.log(state.data)
  },
  ADD_DATA(state, payload) {
    state.data.push(payload)
  }
}
