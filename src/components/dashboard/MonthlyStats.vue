<template>
  <section class="monthly-stats">
    <h6>Monthly Stats (for current year)</h6>
    <ul class="col1">
      <li>
        <p>January</p>
      </li>
      <li>
        <p>$0.00</p>
      </li>
      <li>
        <p>February</p>
      </li>
      <li>
        <p>$0.00</p>
      </li>
      <li>
        <p>March</p>
      </li>
      <li>
        <p>$0.00</p>
      </li>
      <li>
        <p>April</p>
      </li>
      <li>
        <p>$0.00</p>
      </li>
      <li>
        <p>May</p>
      </li>
      <li>
        <p>$0.00</p>
      </li>
      <li>
        <p>June</p>
      </li>
      <li>
        <p>$0.00</p>
      </li>
    </ul>
    <ul class="col2">
      <li>
        <p>July</p>
      </li>
      <li>
        <p>$0.00</p>
      </li>
      <li>
        <p>August</p>
      </li>
      <li>
        <p>$0.00</p>
      </li>
      <li>
        <p>September</p>
      </li>
      <li>
        <p>$0.00</p>
      </li>
      <li>
        <p>October</p>
      </li>
      <li>
        <p>$0.00</p>
      </li>
      <li>
        <p>November</p>
      </li>
      <li>
        <p>$0.00</p>
      </li>
      <li>
        <p>December</p>
      </li>
      <li>
        <p>$0.00</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'MonthlyStats',
  props: {}
}
</script>

<style>
main section.monthly-stats h6 {
  grid-row: 1;
  grid-column: 1 / span 2;
}

main section.monthly-stats ul {
  list-style: none;
}

main section.monthly-stats ul li:nth-child(4n-3),
main section.monthly-stats ul li:nth-child(4n-2) {
  background: var(--primary-color);
}

main section.monthly-stats ul.col1 {
  grid-row: 2;
  grid-column: 1;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: start;
  align-items: center;
}

main section.monthly-stats ul.col2 {
  grid-row: 2;
  grid-column: 2;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: start;
  align-items: center;
}

main section.monthly-stats ul.col1 li,
main section.monthly-stats ul.col2 li {
  width: 100%;
}
</style>