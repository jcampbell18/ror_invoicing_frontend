<template>
  <section class="stats-current-year">
    <h6>Stats (Current Year)</h6>
    <ul>
      <li>
        <p>Paid</p>
      </li>
      <li>
        <p>$0.00</p>
      </li>
      <li>
        <p>Unpaid (Completed Projects)</p>
      </li>
      <li>
        <p>$0.00</p>
      </li>
      <li>
        <p>Unpaid (Uncompleted Projects)</p>
      </li>
      <li>
        <p>$0.00</p>
      </li>
      <li>
        <p>Total (for 2020)</p>
      </li>
      <li>
        <p>$0.00</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'StatsCurrentYear',
  props: {}
}
</script>

<style>
main section.stats-current-year {
  grid-row: 1;
  grid-column: 2;
  justify-self: end;
}

main section.stats-current-year h6 {
  grid-row: 1;
  grid-column: 1 / span 2;
}

main section.stats-current-year ul {
  list-style: none;

  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-items: start;
  align-items: center;
}

main section.stats-current-year ul li {
  width: 100%;
}

main section.stats-current-year ul li:nth-child(4n-3),
main section.stats-current-year ul li:nth-child(4n-2) {
  background: var(--primary-color);
}
</style>