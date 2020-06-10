export default {
  async asyncData({
    params,
    store
  }) {
    const data = await store.dispatch('Blog/detailblog', params.id)
    return {
      data: data.data
    }
  }
}
