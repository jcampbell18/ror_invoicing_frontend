import Vue from 'vue'
import App from './App.vue'

import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

// HTTP connection to the API
const link = createHttpLink({
  // You should use an absolute URL here
  // uri: 'http://localhost:3020/graphql',
  uri: process.env.VUE_APP_GRAPHQL_ENDPOINT
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
export const defaultClient = new ApolloClient({
  link: link,
  cache: cache,
  connectToDevTools: true
})

const apolloProvider = new VueApollo({
  defaultClient: defaultClient,
})

Vue.config.productionTip = false

new Vue({
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
