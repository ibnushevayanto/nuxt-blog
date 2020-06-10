export default {
  async addblog({
    commit
  }, payload) {
    try {
      const id = await this.$axios.$post('https://nuxt-blog-6b95b.firebaseio.com/data.json', payload).then(res => {
        return res.name
      })
      await commit('ADD_DATA', {
        ...payload,
        id
      })
      return {
        success: true
      }
    } catch (error) {
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
  },
  async detailblog(context, payload) {
    try {
      const data = await this.$axios.$get('https://nuxt-blog-6b95b.firebaseio.com/data/' + payload + ".json").then(res => {
        return res
      })

      return {
        success: true,
        data
      }

    } catch (error) {
      return {
        success: false
      }
    }
  },
  async editblog({
    commit
  }, payload) {
    try {
      await this.$axios.$put('https://nuxt-blog-6b95b.firebaseio.com/data/' + payload.id + ".json", payload.data)

      await commit('EDIT_DATA', {
        id: payload.id,
        data: payload.data
      })

      return {
        sucess: true
      }

    } catch (error) {
      return {
        success: false
      }
    }
  },
  async deleteblog({
    commit
  }, payload) {
    try {
      await this.$axios.$delete('https://nuxt-blog-6b95b.firebaseio.com/data/' + payload + '.json')

      await commit('DELETE_BLOG', payload)

      return {
        success: true
      }
    } catch (error) {
      return {
        success: false
      }
    }
  }
}
