const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name : '',
      confirmedName : ''
    };
  },
  methods : {
    confirmedInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      // event.preventDefault();
      alert('Submitted!');
    },
    setName(event, fname) {
      this.name = event.target.value + ' ' + fname;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');
