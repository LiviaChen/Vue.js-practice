<template>
  <h2>Active User: {{ userName }}</h2>
  <h3>Age: {{ age }}</h3>
</template>

<script>
export default {
  props: ["userName", "age"],
  data() {
      return {
          tempName: 'temp name',
          tempAge: '31'
      }
  }
};
</script>
