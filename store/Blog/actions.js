export default {
  async addblog({
    commit
  }, payload) {
    try {
      await this.$axios.$post('https://nuxt-blog-6b95b.firebaseio.com/data.json', payload)
      await commit('ADD_DATA', payload)
      return {
        success: true
      }
    } catch (error) {
      console.log(error)
      return {
        success: false
      }
    }
  },
  async loadblog({
    state,
    commit
  }) {
    try {
      if (state.data.length === 0) {
        const blog = await this.$axios.$get('https://nuxt-blog-6b95b.firebaseio.com/data.json').then(res => {
          const postsArray = []

          for (const key in res) {
            postsArray.push({
              ...res[key],
              id: key
            })
          }

          return postsArray
        })

        await commit('SET_DATA', blog)
      }

      return {
        success: true,
        data: state.data
      }

    } catch (error) {

      return {
        success: false
      }
    }
  }
}
