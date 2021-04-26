<template>
  <section class="companies">
    <h6>{{ companies }}</h6>
    <ul>
      <li v-for="header in headers" :key="header">
        <p class="heading">{{header}}</p>
      </li>
    </ul>
    <ul class="ul-lines" v-for="company in companies" :key="company.id">
      <li>
        <p>{{company.name}}</p>
      </li>
      <li>
        <p>{{company.address}}, {{company.city}}, {{company.state}} {{company.zipcode}}</p>
      </li>
      <li>
        <p>{{company.website_url}}</p>
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
export default {
  apollo: {
    companies: gql`query {
      Companies
    }`,
  },
  name: "Companies",
  props: {},
  data: () => ({
    companies: [],
    headers: [
      'Business Name',
      'Address',
      'Website',
      'View'
    ],
    loading: false
  }),
  created () {
    this.getCompanies()
  },
  watch: {

  },
  methods: {
    getCompanies() {
      this.loading = true

      fetch('http://localhost:3000/api/v1/companies')
        .then(response => response.json())
        .then(response => {
          this.loading = false
          this.companies = response
          console.log("Data: ", this.companies)
        })
        .catch(err => {
          console.log('Fetch Error: ', err);
        })
    }
  }
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