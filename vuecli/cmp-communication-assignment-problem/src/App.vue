<template>
  <h1>User Details</h1>
  <div>
    <div>
      <active-user :userName="name" :age="age"></active-user>
    </div>
    <div>
      <user-data
        @forward-name="displayName"
        @forward-age="displayAge"
      ></user-data>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    displayName(name) {
      this.name = name;
    },
    displayAge(age) {
      this.age = age;
    },
  },
  data() {
    return {
      name: "",
      age: "",
    };
  },
};
</script>
