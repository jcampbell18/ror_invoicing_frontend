<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <Header access_level="Admin" />
    <Aside />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Aside from './components/Aside.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Aside,
    Main,
    Footer,
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
