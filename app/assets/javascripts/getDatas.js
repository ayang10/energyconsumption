document.addEventListener('DOMContentLoaded', function(event) {
  const app = new Vue({
    el: '#energy-properties',
    computed: {
        searchFilter() {
            
        }
    },
    data: {
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
    },
    methods: {
        getEnergyAvg: function(energy){
            var total = 0;
            for (var i = 0; i < energy.length; i++) {
                total += energy[i].energyUsed;
            }
            return total;
        }
    }
  })
})
