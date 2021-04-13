<template>
  <section class="outstanding-invoices">
    <h6>Outstanding Invoices</h6>
    <ul>
      <li>
        <p class="heading">Invoice</p>
      </li>
      <li>
        <p class="heading">Date</p>
      </li>
      <li>
        <p class="heading">Project Site</p>
      </li>
      <li>
        <p class="heading">Details</p>
      </li>
      <li>
        <p class="heading">Amount</p>
      </li>
      <li>
        <p class="heading">Completed?</p>
      </li>
      <li>
        <p class="heading">View</p>
      </li>
      <li>
        <p class="heading">Print</p>
      </li>
    </ul>
    <ul>
      <li>
        <p class="heading">{{  }}</p>
      </li>
    </ul>
    <ul class="ul-lines">
      <li>
        <p></p>
      </li>
      <li>
        <p></p>
      </li>
      <li>
        <p></p>
      </li>
      <li>
        <p></p>
      </li>
      <li>
        <p></p>
      </li>
      <li>
        <img src="" alt="">
      </li>
      <li>
        <a href="">
          <img src="@/assets/icons/preview_black_24dp.svg" alt="View" title="View"/>
        </a>
      </li>
      <li>
        <a href="">
          <img src="@/assets/icons/print_black_24dp.svg" alt="Print" title="Print"/>
        </a>
      </li>
    </ul>
<!--    <ul class="ul-lines">-->
<!--      <li>-->
<!--        <p>#0092</p>-->
<!--      </li>-->
<!--      <li>-->
<!--        <p>04/27/2013</p>-->
<!--      </li>-->
<!--      <li>-->
<!--        <p>1703 E 4th Ave, Spokane, WA 99202</p>-->
<!--      </li>-->
<!--      <li>-->
<!--        <p>Short-term Loan</p>-->
<!--      </li>-->
<!--      <li>-->
<!--        <p>$400.00</p>-->
<!--      </li>-->
<!--      <li>-->
<!--        <img src="@/assets/icons/512x512/checkbox_unmarked.png" alt="Completed" title="Completed"/>-->
<!--      </li>-->
<!--      <li>-->
<!--        <a href="">-->
<!--          <img src="@/assets/icons/512x512/view.png" alt="View" title="View"/>-->
<!--        </a>-->
<!--      </li>-->
<!--      <li>-->
<!--        <a href="">-->
<!--          <img src="@/assets/icons/512x512/print.png" alt="Print" title="Print"/>-->
<!--        </a>-->
<!--      </li>-->
<!--    </ul>-->
  </section>
</template>

<script>
export default {
  name: 'OutstandingInvoices',
  props: {},
  test: {
    columns: ['Invoice', 'Date', 'Project Site', 'Details', 'Amount ($)', 'Completed?', 'View', 'Print'],
  },
}
</script>

<style>
main section.outstanding-invoices {
  grid-row: 2;
  grid-column: 1 /  span 2;
  min-width: 328px;
  width: 100%;
}

main section.outstanding-invoices ul {
  list-style: none;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(45px, 1fr));
  justify-items: center;
  align-items: center;
}

main section.outstanding-invoices ul li p {
  overflow: hidden;
}

main section.outstanding-invoices ul.ul-lines:nth-child(odd) {
  background: var(--primary-color);
}

main section.outstanding-invoices ul li {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}

main section.outstanding-invoices ul li img {
  width: 32px;
}

main section.outstanding-invoices ul li a img {
  width: 32px;
  padding: 0.2em 0;
  margin: 0 auto;
  display: block;
}

main section.outstanding-invoices ul li input {
  justify-self: center;
  align-self: center;
}
</style>