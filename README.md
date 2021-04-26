# Frontend: Invoicing System

## Environment

### Operating System

- [x] Ubuntu 20.10

### IDE

- [x] Rubymine 2020.3

#### Rubymine Setup

- [x] Project Name: ror_invoicing_frontend

### UML

![ror_invoicing_frontend](https://github.com/jcampbell18/ror_invoicing_frontend/blob/main/ror_invoicing_frontend.jpg)

## Project setup
```
yarn install
```

### Vue-CLI & Routing

- `yarn add @vue-cli`

- `vue add router`

### Apollo

#### Install Apollo for client-side

- run command: `yarn add vue-apollo graphql apollo-boost`

- run command: `yarn add vue-apollo graphql apollo-client apollo-link apollo-link-http apollo-cache-inmemory graphql-tag`
  
- run command: `vue add apollo`

- update file `/src/main.js`

```javascript
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
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
