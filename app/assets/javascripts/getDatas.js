document.addEventListener('DOMContentLoaded', function(event) {
  const app = new Vue({
    el: '#energy-properties',
    data: function() {
        return {
            search: '',
            sort: '',
            listProperties: [ 
                { address: '123 Pond rd', city: 'Fish', state: 'MC', zip: '23458', 
                energy: [{date: '1/1/2019', energyUsed: 56}, {date: '1/2/2019', energyUsed: 49}, {date: '1/3/2019', energyUsed: 23}
                ]},
                { address: '435 King st', city: 'Queen', state: 'SU', zip: '43664', 
                energy: [{date: '1/1/2019', energyUsed: 100}, {date: '1/2/2019', energyUsed: 123}, {date: '1/3/2019', energyUsed: 115}
                ]},
                { address: '345 Crack rd', city: 'Smoke', state: 'PO', zip: '34678', 
                energy: [{date: '1/1/2019', energyUsed: 89}, {date: '1/2/2019', energyUsed: 85}, {date: '1/3/2019', energyUsed: 89}
                ]},
                { address: '123 Mushroom rd', city: 'Boy', state: 'SP', zip: '34568', 
                energy: [{date: '1/1/2019', energyUsed: 25}, {date: '1/2/2019', energyUsed: 80}, {date: '1/3/2019', energyUsed: 100}
                ]}
            ]
        }
    },
    mounted: function() {
       this.createChart();
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
        createChart: function(){
            let newArrDatas = [];
      
            if (this.searchFilter.length > 0){
                let newLabels = this.searchFilter[0].energy.map(a => a.date);

                for (let i = 0; i < this.searchFilter.length; i++){
                    newArrDatas.push({name: this.listProperties[i].address}, {type: "line"}, {values: this.searchFilter[i].energy.map(a => a.energyUsed)})
                }
                
                const data = {
                    labels: newLabels,
                    datasets: newArrDatas
                }
                new frappe.Chart("#chart", {  // or a DOM element,
                    title: "Energy Consumption",
                    data: data,
                    type: 'axis-mixed', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
                    height: 250,
                    colors: ['#7cd6fd', '#743ee2']
                })
            }
            else {
                new frappe.Chart("#chart", {  // or a DOM element,
                    title: "Energy Consumption",
                    data: {labels: "", datasets: []},
                    type: 'axis-mixed', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
                    height: 250,
                    colors: ['#7cd6fd', '#743ee2']
                })
            }
        }
    },
    watch: {
        search: function(){
            this.createChart();
        },
        sort: function(val) {
            if(val == 'asc'){
                this.searchFilter = this.searchFilter.sort((a,b) => this.getEnergyAvg(a.energy) - this.getEnergyAvg(b.energy));
            }
            else {
                this.searchFilter = this.searchFilter.sort((a,b) => this.getEnergyAvg(b.energy) - this.getEnergyAvg(a.energy));
            }
        }
    }
  })
})
