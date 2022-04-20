const app = Vue.createApp({
    data() {
        return {
            output: '',
            output2: '',
            confirmOutput2 : ''
        };
    },
    methods: {
        buttonPressed() {
            alert('Button pressed!');
        },
        userInput(event) {
            this.output = event.target.value;
        },
        userInput2(event) {
            this.output2 = event.target.value;
        },
        outputUserinput2(event) {
            this.confirmOutput2 = this.output2;
        }
    }
});

app.mount('#assignment');