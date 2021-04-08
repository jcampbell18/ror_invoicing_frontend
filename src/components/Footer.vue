<template>
  <footer>
    <p>DocJas.com | repair & renovation | All rights reserved 2020</p>
    <p>
      Designed & Developed by Jason L Campbell<br />
      Icons made by <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {}
}
</script>

<style scoped>
footer {
  width: 100%;
  background: var(--secondary-color);

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: start;
  align-items: center;
}

footer p {
  color: var(--tertiary-color);
  padding: 1.0em 1.0em;


}

footer p:last-child {
  justify-self: end;
}

footer p a,
footer p a:link,
footer p a:visited,
footer p a:hover {
  color: var(--tertiary-color);
}
</style>