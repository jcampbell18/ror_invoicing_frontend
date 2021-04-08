<template>
  <main>
    <MonthlyStats />
    <StatsCurrentYear />
    <OutstandingInvoices />
  </main>
</template>

<script>
import MonthlyStats from "@/components/dashboard/MonthlyStats";
import StatsCurrentYear from "@/components/dashboard/StatsCurrentYear";
import OutstandingInvoices from "@/components/dashboard/OutstandingInvoices";

export default {
  name: 'Main',
  components: {OutstandingInvoices, StatsCurrentYear, MonthlyStats},
  props: {}
}
</script>

<style>
main {
  width: 100%;
  background: inherit;
  padding: 1.0em 0;

  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(162px, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(408px, 1fr));
  gap: 1.2em;
  justify-items: center;
  align-items: start;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
}

main section {
  border: 2px solid var(--secondary-color);
  border-radius: 10px;
  box-shadow: rgba(66,57,58,0.4) 4px 4px 4px;
  margin: 1.0em;
}

main section h6 {
  background: var(--secondary-color);
  color: var(--primary-color);
}

main li p {
  padding: 0.4em;
}
</style>