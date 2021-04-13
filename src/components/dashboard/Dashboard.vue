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
  name: 'Dashboard',
  components: {
    OutstandingInvoices,
    StatsCurrentYear,
    MonthlyStats},
  props: {}
}
</script>

<style>

</style>