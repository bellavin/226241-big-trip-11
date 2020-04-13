export const EVENT_TYPE_LIST = [
  {
    name: `transfer`,
    list: [
      `taxi`,
      `bus`,
      `train`,
      `ship`,
      `transport`,
      `drive`,
      `flight`,
    ]
  },
  {
    name: `activity`,
    list: [
      `check-in`,
      `sightseeing`,
      `restaurant`,
    ]
  }
];


export const POSTPOSITION = {
  taxi: `to`,
  bus: `to`,
  train: `to`,
  ship: `to`,
  transport: `to`,
  drive: `to`,
  flight: `to`,
  sightseeing: `in`,
  restaurant: `in`,
  [`check-in`]: `in`,
};


export const OFFER = {
  taxi: [
    {
      name: `Upgrade to a business class`,
      price: 120
    },
    {
      name: `Choose the radio station`,
      price: 160
    },
    {
      name: `Choose temperature`,
      price: 170
    },
    {
      name: `Drive quickly, I'm in a hurry`,
      price: 190
    },
    {
      name: `Drive slowly`,
      price: 190
    }
  ],
  bus: [
    {
      name: `Infotainment system`,
      price: 150
    },
    {
      name: `Order meal`,
      price: 70
    },
    {
      name: `Choose seats`,
      price: 180
    }
  ],
  train: [
    {
      name: `Book a taxi at the arrival point`,
      price: 140
    },
    {
      name: `Order a breakfast`,
      price: 90
    },
    {
      name: `Wake up at a certain time`,
      price: 190
    }
  ],
  flight: [
    {
      name: `Choose meal`,
      price: 60
    },
    {
      name: `Choose seats`,
      price: 50
    },
    {
      name: `Upgrade to comfort class`,
      price: 70
    },
    {
      name: `Upgrade to business class`,
      price: 50
    },
    {
      name: `Add luggage`,
      price: 70
    },
    {
      name: `Business lounge`,
      price: 80
    }
  ],
  [`check-in`]: [
    {
      name: `Choose the time of check-in`,
      price: 70
    },
    {
      name: `Choose the time of check-out`,
      price: 30
    },
    {
      name: `Add breakfast`,
      price: 190
    },
    {
      name: `Laundry`,
      price: 100
    },
    {
      name: `Order a meal from the restaurant`,
      price: 90
    }
  ],
  ship: [
    {
      name: `Choose meal`,
      price: 140
    },
    {
      name: `Choose seats`,
      price: 190
    },
    {
      name: `Upgrade to comfort class`,
      price: 90
    },
    {
      name: `Upgrade to business class`,
      price: 80
    },
    {
      name: `Add luggage`,
      price: 50
    },
    {
      name: `Business lounge`,
      price: 100
    }
  ],
  transport: [],
  drive: [
    {
      name: `Choose comfort class`,
      price: 110
    },
    {
      name: `Choose business class`,
      price: 190
    }
  ],
  restaurant: [
    {
      name: `Choose live music`,
      price: 90
    },
    {
      name: `Choose VIP area`,
      price: 60
    }
  ]
};

export const SORT_LIST = [`event`, `time`, `price`];
export const FILTER_LIST = [`everything`, `future`, `past`];
export const TAB_LIST = [`table`, `stats`];
