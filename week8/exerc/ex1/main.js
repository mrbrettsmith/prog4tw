Vue.createApp({
    data() {
        return {
            firstName: '',
            lastName: '',
            street: '',
            city: '',
            state: 'MN',
            availableStates: [    
            {name: 'Minnesota', value:'MN'},
            {name: 'Wisconsin', value:'WI'},
            {name: 'South Dakota', value:'SD'},
            {name: 'North Dakota', value:'ND'},
            ],
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