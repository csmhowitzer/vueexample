<script setup>
  // TODO: So we will need:
  // 1. Role Name / Department Name

  // eslint-disable-next-line no-unused-vars
  const props = defineProps({
    empList: {
      type: null,
      required: true,
      default: () => [],
    },
  })
</script>
<template>
  <div class="group">
    <span class="heading"><slot>Department</slot></span>
    <div v-for="emp in empList" :key="emp.id" >
      <p v-if="false">Loading...</p>
      <div v-else class="empBlock">
        <div>
          <span class="role">{{ emp.roleName }}</span>
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
