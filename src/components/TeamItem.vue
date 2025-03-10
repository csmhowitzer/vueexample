<script setup>
  import { ref } from 'vue'
  import { fetchEmpList } from '../lib/data.js'
  import TeamGroup from './TeamGroup.vue'

// TODO:
// next we'll want to move each into a child component

  const empList = ref(null)
  const mgrList = ref(null)
  const hr = ref(null)
  const sales = ref(null)
  const marketing = ref(null)
  const finance = ref(null)
  const support = ref(null)
  const product = ref(null)
  const software = ref(null)
  const qa = ref(null)

  async function fetchEmployees() {
    empList.value = null
    mgrList.value = null
    hr.value = null
    sales.value = null
    marketing.value = null
    finance.value = null
    support.value = null
    product.value = null
    software.value = null
    qa.value = null

    empList.value = await fetchEmpList();

    mgrList.value = empList.value.items.filter((e) => e.roleName.includes("anager"));
    hr.value = empList.value.items.filter((e) => e.roleName.includes("HR") || e.roleName === "Recruiter");
    sales.value = empList.value.items.filter((e) => e.roleName.includes("ales"));
    marketing.value = empList.value.items.filter((e) => e.roleName.includes("arketing"));
    finance.value = empList.value.items.filter((e) => e.roleName.includes("ccount") || e.roleName.includes("CFO"));
    support.value = empList.value.items.filter((e) => e.roleName.includes("upport"));
    product.value = empList.value.items.filter((e) => e.roleName.includes("Owner") || e.roleName.includes("usiness") || e.roleName.includes("roject"));
    software.value = empList.value.items.filter((e) => e.roleName.includes("oftware") || e.roleName.includes("ead") || e.roleName.includes("Development"));
    qa.value = empList.value.items.filter((e) => e.roleName.includes("QA"));
  }

  fetchEmployees()
</script>

<template>
  <h1>Company Employees</h1>
  <!-- <TeamGroup :empList="mgrList"> -->
  <!--   <template #header>Managers</template> -->
  <!-- </TeamGroup> -->
  <TeamGroup :empList="mgrList">Management</TeamGroup>
  <TeamGroup :empList="hr">H.R.</TeamGroup>
  <TeamGroup :empList="sales">Sales</TeamGroup>
  <TeamGroup :empList="marketing">Marketing</TeamGroup>
  <TeamGroup :empList="finance">Finance</TeamGroup>
  <TeamGroup :empList="support">Support</TeamGroup>
  <TeamGroup :empList="product">Product</TeamGroup>
  <TeamGroup :empList="software">Engineering</TeamGroup>
  <TeamGroup :empList="qa">Q.A.</TeamGroup>
</template>

<style scoped>
  .group {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 15px;
    display: grid;
    grid-template-columns: 1fr 3fr 3fr;
    margin: 12px 0;
  }
  .group:hover{
    background-color: #787878;
  }
  .heading {
    writing-mode: vertical-rl;
    text-orientation: sideways;
    font-size: 48px;
    font-weight: bold;
    grid-row: 1 / 10;
  }
  .group > div {
    width: 40%;
  }
  .empBlock {
    border: 1px solid #ccc;
    border-radius: 13px;
    padding: 5px;
    margin: 5px;
    width: 200px;
  }
  .role {
    font-weight: bold;
  }
</style>
