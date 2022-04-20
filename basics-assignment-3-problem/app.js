const app = Vue.createApp({
    data() {
        return {
            number: 0
        };
    },
    watch: {
        result(value) {
            const that = this;
            setTimeout(function() {
                that.number = 0;
            }, 5000);
        }
    },
    computed: {
        result() {
            if (this.number < 37) {
                return 'not there yet';
            } else if (this.number === 37) {
                return this.number; 
            } else {
                return 'Too Much!';
            }
        }
    },
    methods: {
        addNumber(num) {
            this.number = this.number + num
        }
    }
});

app.mount('#assignment');