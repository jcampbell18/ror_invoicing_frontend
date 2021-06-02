import Vue from 'vue'
import App from './App.vue'
import router from './routes'

import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

const link = createHttpLink({
  uri: 'http://localhost:3000/graphql'
})

export const defaultClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient
})

new Vue({
  el: '#app',
  router,
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
