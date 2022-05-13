<template>
  <label>
    Input Name
    <input v-model="inputName" @input="$emit('forward-name', inputName)" />
  </label>
  <label>
    Input Age
    <input v-model="inputAge" @input="$emit('forward-age', inputAge)" />
  </label>
</template>

<script>
export default {
  data() {
    return {
      inputName: "",
      inputAge: "",
    };
  },
  emits: ['forward-name', 'forward-age']
};
</script>
