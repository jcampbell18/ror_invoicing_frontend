<template>
  <section class="companies">
    <h6>{{ name }}</h6>
    <ul>
      <li v-for="header in headers" :key="header">
        <p class="heading">{{header}}</p>
      </li>
    </ul>
    <ul class="ul-lines" v-for="client in clients" :key="company.id">
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
section.companies {
  grid-row: 2;
  grid-column: 1 /  span 2;
  width: 100%;
}

section.companies ul {
  list-style: none;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(45px, 1fr));
  justify-items: center;
  align-items: center;
}

section.companies ul li p {
  overflow: hidden;
}

section.companies ul.ul-lines:nth-child(odd) {
  background: var(--primary-color);
}

section.companies ul li {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}

section.companies ul li img {
  width: 32px;
}

section.companies ul li a img {
  width: 32px;
  padding: 0.2em 0;
  margin: 0 auto;
  display: block;
}

section.companies ul li input {
  justify-self: center;
  align-self: center;
}
</style>