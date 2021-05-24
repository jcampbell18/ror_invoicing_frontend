import Vue from 'vue'
import App from './App.vue'

import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

// HTTP connection to the API
const link = createHttpLink({
  uri: 'http://localhost:3000/graphql'
})

// Create the apollo client
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
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
