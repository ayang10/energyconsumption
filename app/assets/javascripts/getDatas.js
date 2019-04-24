document.addEventListener('DOMContentLoaded', function(event) {
  const app = new Vue({
    el: '#energy-properties',
    data: function() {
        return {
            search: '',
            sort: {
                field: '',
                desc: true
            },
            listProperties: [ 
                { address: '123 Pond rd', city: 'Fish', state: 'MC', zip: '23458', 
                energy: [{date: 1/1/2019, energyUsed: 56}, {date: 1/2/2019, energyUsed: 49}, {date: 1/3/2019, energyUsed: 23}
                ]},
                { address: '435 King st', city: 'Queen', state: 'SU', zip: '43664', 
                energy: [{date: 1/1/2019, energyUsed: 100}, {date: 1/2/2019, energyUsed: 123}, {date: 1/3/2019, energyUsed: 115}
                ]},
                { address: '345 Crack rd', city: 'Smoke', state: 'PO', zip: '34678', 
                energy: [{date: 1/1/2019, energyUsed: 89}, {date: 1/2/2019, energyUsed: 85}, {date: 1/3/2019, energyUsed: 89}
                ]},
                { address: '123 Mushroom rd', city: 'Boy', state: 'SP', zip: '34568', 
                energy: [{date: 1/1/2019, energyUsed: 25}, {date: 1/2/2019, energyUsed: 80}, {date: 1/3/2019, energyUsed: 100}
                ]}
            ]
        }
    },
    mounted: function() {
        const data = {
    labels: ["12am-3am", "3am-6pm", "6am-9am", "9am-12am",
        "12pm-3pm", "3pm-6pm", "6pm-9pm", "9am-12am"
    ],
    datasets: [
        {
            name: "Some Data", type: "bar",
            values: [25, 40, 30, 35, 8, 52, 17, -4]
        },
        {
            name: "Another Set", type: "line",
            values: [25, 50, -10, 15, 18, 32, 27, 14]
        }
    ]
}
        new frappe.Chart("#chart", {  // or a DOM element,
            title: "Energy Consumption",
            data: data,
            type: 'axis-mixed', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
            height: 250,
            colors: ['#7cd6fd', '#743ee2']
        })
    },
    computed: {
        searchFilter: function() {
            return this.listProperties.filter(property => {
                return property.city.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
    methods: {
        getEnergyAvg: function(energy){
            var total = 0;
            for (var i = 0; i < energy.length; i++) {
                total += energy[i].energyUsed;
            }
            return total;
        },
        sortEnergyAvg: function(event){ console.log('here')
            if(event.target.value == 'asc'){
                !this.searchFilter.desc
            }
            else {
                this.searchFilter.desc
            }
        }
    }
  })
})
