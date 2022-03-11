Vue.createApp({
    data() {
        return {
            firstName: "",
            lastName: '',
            street: '',
            state: 'Mn',
            selectedColors: [],
            colors: [
                {name: 'Molten Green', value: 'green'},
                {name: 'Neon Neon', value: 'neon'},
                {name: 'Dusty Rose', value: 'rose'},
            ],
            status: '',
        }
    }
}).mount("#app")