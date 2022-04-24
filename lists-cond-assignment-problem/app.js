const app = Vue.createApp({
    data() {
        return{
            inputText: '',
            tasks: [],
            showButton: true,
            // showStatus: 'Hide List'
        };
    },
    computed: {
        showStatus() {
            return this.showButton ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.inputText);
        },
        buttonSwitch() {
            this.showButton = !this.showButton;
        //     if (this.showButton) {
        //         this.showStatus = 'Hide List'
        //     } else {
        //         this.showStatus = 'Show List'
        //     };
        }
    }
});

app.mount("#assignment");