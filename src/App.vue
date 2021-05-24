<template>
  <div id="app">
    <Header access_level='Admin' />
    <Aside />
    <Main page='Dashboard' />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Aside from './components/Aside.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  apollo: {},
  name: 'App',
  components: {
    Header,
    Aside,
    Main,
    Footer,
  },
  props: {

  }
}
</script>

<style>
#app {
  width: 96%;
  background: var(--off-white);
  border: 4px solid var(--secondary-color);
  border-radius: 10px;
  box-shadow: rgba(66,57,58,0.4) 4px 4px 4px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
</style>
