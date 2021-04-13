<template>
  <main>

  </main>
</template>

<script>
// import MonthlyStats from "@/components/dashboard/MonthlyStats";

export default {
  name: 'ProjectSites',
  components: {},
  props: {},
  data () {

  },
  created () {
    this.fetchData()
  },
  methods: {
    // fetchData () {
    //   this.error = this.post = null
    //   this.loading = true
    //   const fetchedId = this.$route.params.id
    //   // replace `getPost` with your data fetching util / API wrapper
    //   getPost(fetchedId, (err, post) => {
    //     // make sure this request is the last one we did, discard otherwise
    //     if (this.$route.params.id !== fetchedId) return
    //     this.loading = false
    //     if (err) {
    //       this.error = err.toString()
    //     } else {
    //       this.post = post
    //     }
    //   })
    // }
  },
}
</script>

<style>

</style>