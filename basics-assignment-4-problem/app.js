const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            confirmedInput: '',
            pVisibility: '',
            color: ''
        };
    },
    computed: {
        pVisible() {
            return this.pVisibility;   
        }
    },
    methods: {
        pToggle() {
            if (this.pVisibility === '') {
                this.pVisibility = 'hidden';
            } else if (this.pVisibility === 'hidden') {
                this.pVisibility = 'visible';
            } else if (this.pVisibility === 'visible') {
                this.pVisibility = 'hidden';
            }
        }
    }
});

app.mount('#assignment');