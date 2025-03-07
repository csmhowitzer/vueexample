<script setup>
  import { ref } from 'vue'

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
    const result = await fetch('http://localhost:5036/employees')
    empList.value = await result.json()
    mgrList.value = empList.value.items.filter((e) => e.roleName.includes("anager"));
    hr.value = empList.value.items.filter((e) => e.roleName.includes("HR") || e.roleName ===
    "Recruiter");
    sales.value = empList.value.items.filter((e) => e.roleName.includes("ales"));
    marketing.value = empList.value.items.filter((e) => e.roleName.includes("arketing"));
    finance.value = empList.value.items.filter((e) => e.roleName.includes("ccount") ||
    e.roleName.includes("CFO"));
    support.value = empList.value.items.filter((e) => e.roleName.includes("upport"));
    product.value = empList.value.items.filter((e) => e.roleName.includes("Owner") ||
    e.roleName.includes("usiness") || e.roleName.includes("roject"));
    software.value = empList.value.items.filter((e) => e.roleName.includes("oftware") ||
    e.roleName.includes("ead") || e.roleName.includes("Development"));
    qa.value = empList.value.items.filter((e) => e.roleName.includes("QA"));
  }

  fetchEmployees()
</script>

<template>
  <h1>Company Employees</h1>
  <div class="group">
    <span class="heading">Management</span>
    <div v-for="emp in mgrList" :key="emp.id" >
      <p v-if="!mgrList">Loading...</p>
      <div v-else class="empBlock">
        <div>
          <span class="role">{{ emp.roleName}}</span>
        </div>
        <div>
        <span>{{ emp.fName}} {{ emp.lName }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="group">
    <span class="heading">H.R.</span>
    <div v-for="emp in hr" :key="emp.id" >
      <p v-if="!mgrList">Loading...</p>
      <div v-else class="empBlock">
        <div>
          <span class="role">{{ emp.roleName}}</span>
        </div>
        <div>
        <span>{{ emp.fName}} {{ emp.lName }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="group">
    <span class="heading">Sales</span>
    <div v-for="emp in sales" :key="emp.id" >
      <p v-if="!mgrList">Loading...</p>
      <div v-else class="empBlock">
        <div>
          <span class="role">{{ emp.roleName}}</span>
        </div>
        <div>
        <span>{{ emp.fName}} {{ emp.lName }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="group">
    <span class="heading">Marketing</span>
    <div v-for="emp in marketing" :key="emp.id" >
      <p v-if="!mgrList">Loading...</p>
      <div v-else class="empBlock">
        <div>
          <span class="role">{{ emp.roleName}}</span>
        </div>
        <div>
        <span>{{ emp.fName}} {{ emp.lName }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="group">
    <span class="heading">Finance</span>
    <div v-for="emp in finance" :key="emp.id" >
      <p v-if="!mgrList">Loading...</p>
      <div v-else class="empBlock">
        <div>
          <span class="role">{{ emp.roleName}}</span>
        </div>
        <div>
        <span>{{ emp.fName}} {{ emp.lName }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="group">
    <span class="heading">Support</span>
    <div v-for="emp in support" :key="emp.id" >
      <p v-if="!mgrList">Loading...</p>
      <div v-else class="empBlock">
        <div>
          <span class="role">{{ emp.roleName}}</span>
        </div>
        <div>
        <span>{{ emp.fName}} {{ emp.lName }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="group">
    <span class="heading">Proj. Mgmt.</span>
    <div v-for="emp in product" :key="emp.id" >
      <p v-if="!mgrList">Loading...</p>
      <div v-else class="empBlock">
        <div>
          <span class="role">{{ emp.roleName}}</span>
        </div>
        <div>
        <span>{{ emp.fName}} {{ emp.lName }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="group">
    <span class="heading">Engineering</span>
    <div v-for="emp in software" :key="emp.id" >
      <p v-if="!mgrList">Loading...</p>
      <div v-else class="empBlock">
        <div>
          <span class="role">{{ emp.roleName}}</span>
        </div>
        <div>
        <span>{{ emp.fName}} {{ emp.lName }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="group">
    <span class="heading">Quality</span>
    <div v-for="emp in qa" :key="emp.id" >
      <p v-if="!mgrList">Loading...</p>
      <div v-else class="empBlock">
        <div>
          <span class="role">{{ emp.roleName}}</span>
        </div>
        <div>
        <span>{{ emp.fName}} {{ emp.lName }}</span>
        </div>
      </div>
    </div>
  </div>
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
