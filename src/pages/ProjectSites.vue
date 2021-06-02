<template>
  <section class="project-sites">
    <h6>{{ name }}</h6>
    <ul>
      <li v-for="header in headers" :key="header">
        <p class="heading">{{header}}</p>
      </li>
    </ul>
    <ul class="ul-lines" v-for="projectSite in projectSites" :key="projectSite.id">
      <li>
        <p>{{ projectSite.address }}<br />{{ projectSite.city }}, {{ projectSite.state.abbreviation }} {{ projectSite.zipcode }}</p>
      </li>
      <li>
        <p>{{ projectSite.accessCode }}</p>
      </li>
      <li>
        <p>
          <a v-bind="projectSite.mapUrl" target="_blank">Google Map</a>
        </p>
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
import { GET_ALL_PROJECT_SITES_QUERY } from '@/graphql'

export default {
  name: 'Project Sites',
  data: () => ({
    headers: [
      'Address',
      'Access Code',
      'Map',
      'View'
    ],
    projectSites: [],
  }),
  apollo: {
    projectSites: GET_ALL_PROJECT_SITES_QUERY
  },
}
</script>

<style>
section.project-sites {
  grid-row: 2;
  grid-column: 1 /  span 2;
  width: 100%;
}

section.project-sites ul {
  list-style: none;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(45px, 1fr));
  justify-items: center;
  align-items: center;
}

section.project-sites ul li p {
  overflow: hidden;
}

section.project-sites ul.ul-lines:nth-child(odd) {
  background: var(--primary-color);
}

section.project-sites ul li {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}

section.project-sites ul li img {
  width: 32px;
}

section.project-sites ul li a img {
  width: 32px;
  padding: 0.2em 0;
  margin: 0 auto;
  display: block;
}

section.project-sites ul li input {
  justify-self: center;
  align-self: center;
}
</style>