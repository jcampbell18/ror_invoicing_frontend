<template>
  <section class="clients">
    <h6>Clients</h6>
    <ul>
      <li v-for="header in headers" :key="header">
        <p class="heading">{{header}}</p>
      </li>
    </ul>
    <ul class="ul-lines" v-for="client in clients" :key="client.id">
      <li>
        <p>{{ client.name }}</p>
      </li>
      <li>
        <p>{{ client.address }}<br />{{ client.city }}, {{ client.state.abbreviation }} {{ client.zipcode }}</p>
      </li>
      <li>
        <p>{{ client.websiteUrl }}</p>
      </li>
      <li>
        <a href="">
          <img src="@/assets/icons/preview_black_24dp.svg" alt="View" title="View"/>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import { GET_ALL_CLIENTS_QUERY } from '@/graphql'

export default {
  name: 'Clients',
  data: () => ({
    headers: [
      'Business Name',
      'Address',
      'Website',
      'View'
    ],
    clients: [],
  }),
  apollo: {
    clients: GET_ALL_CLIENTS_QUERY
  },
}
</script>

<style>
section.clients {
  grid-row: 2;
  grid-column: 1 /  span 2;
  width: 100%;
}

section.clients ul {
  list-style: none;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(45px, 1fr));
  justify-items: center;
  align-items: center;
}

section.clients ul li p {
  overflow: hidden;
}

section.clients ul.ul-lines:nth-child(odd) {
  background: var(--primary-color);
}

section.clients ul li {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}

section.clients ul li img {
  width: 32px;
}

section.clients ul li a img {
  width: 32px;
  padding: 0.2em 0;
  margin: 0 auto;
  display: block;
}

section.clients ul li input {
  justify-self: center;
  align-self: center;
}
</style>