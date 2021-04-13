<template>
  <main>
    <p>test</p>
  </main>
</template>

<script>
export default {
  name: "Companies",
  props: {},
  data () {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      this.data = null
      // this.error = null
      // this.loading = true

      return fetch('http://localhost:3000/api/v1/companies', {
        method: 'get',
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => {
        console.log("Status code: " + res.status)
        console.log("Data: ", res.json())
        return res.json();
      }).catch(err => {
        console.log('Fetch Error: ', err);
      })
    }
  }
}
</script>

<style scoped>

</style>