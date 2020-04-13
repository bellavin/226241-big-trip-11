const points = [
  {
    id: `0`,
    type: `bus`,
    dateFrom: `2020-04-07T08:16:27.069Z`,
    dateTo: `2020-04-08T02:04:23.022Z`,
    destination: {
      name: `Madrid`,
      description: `Madrid, a true asian pearl, for those who value comfort and coziness, with an embankment of a mighty river as a centre of attraction.`,
      pictures: [
        {
          src: `http://picsum.photos/300/200?r=0.6862175171400697`,
          description: `Madrid kindergarten`
        },
        {
          src: `http://picsum.photos/300/200?r=0.6776441101202946`,
          description: `Madrid city centre`
        },
        {
          src: `http://picsum.photos/300/200?r=0.33250855409158886`,
          description: `Madrid parliament building`
        },
        {
          src: `http://picsum.photos/300/200?r=0.4067277224805239`,
          description: `Madrid parliament building`
        },
        {
          src: `http://picsum.photos/300/200?r=0.6182850208992396`,
          description: `Madrid street market`
        },
        {
          src: `http://picsum.photos/300/200?r=0.9124599921155074`,
          description: `Madrid biggest supermarket`
        },
        {
          src: `http://picsum.photos/300/200?r=0.33649644253689814`,
          description: `Madrid zoo`
        },
        {
          src: `http://picsum.photos/300/200?r=0.31570016781365484`,
          description: `Madrid street market`
        }
      ]
    },
    basePrice: 400,
    isFavorite: true,
    offers: [
      {
        title: `Order meal`,
        price: 50
      },
      {
        title: `Infotainment system`,
        price: 120
      }
    ]
  },
  {
    id: `1`,
    type: `drive`,
    dateFrom: `2020-04-08T02:04:23.022Z`,
    dateTo: `2020-04-08T04:53:10.380Z`,
    destination: {
      name: `Berlin`,
      description: `Berlin, a true asian pearl, with a beautiful old town, middle-eastern paradise, for those who value comfort and coziness, a perfect place to stay with a family.`,
      pictures: [
        {
          src: `http://picsum.photos/300/200?r=0.39078477363105324`,
          description: `Berlin embankment`
        },
        {
          src: `http://picsum.photos/300/200?r=0.7970635823353884`,
          description: `Berlin kindergarten`
        },
        {
          src: `http://picsum.photos/300/200?r=0.7733293687007832`,
          description: `Berlin city centre`
        },
        {
          src: `http://picsum.photos/300/200?r=0.014145283733922875`,
          description: `Berlin central station`
        },
        {
          src: `http://picsum.photos/300/200?r=0.374739607242903`,
          description: `Berlin park`
        }
      ]
    },
    basePrice: 1100,
    isFavorite: false,
    offers: [
      {
        title: `Choose business class`,
        price: 120
      },
      {
        title: `Choose comfort class`,
        price: 110
      }
    ]
  },
  {
    id: `2`,
    type: `restaurant`,
    dateFrom: `2020-04-08T04:53:10.380Z`,
    dateTo: `2020-04-08T20:09:54.187Z`,
    destination: {
      name: `Kioto`,
      description: `Kioto, in a middle of Europe, with a beautiful old town, full of of cozy canteens where you can try the best coffee in the Middle East.`,
      pictures: [
        {
          src: `http://picsum.photos/300/200?r=0.5695728023694067`,
          description: `Kioto city centre`
        },
        {
          src: `http://picsum.photos/300/200?r=0.6842659622155909`,
          description: `Kioto zoo`
        },
        {
          src: `http://picsum.photos/300/200?r=0.6455600982529812`,
          description: `Kioto embankment`
        },
        {
          src: `http://picsum.photos/300/200?r=0.05023158480199297`,
          description: `Kioto embankment`
        },
        {
          src: `http://picsum.photos/300/200?r=0.9231824533500892`,
          description: `Kioto biggest supermarket`
        }
      ]
    },
    basePrice: 1000,
    isFavorite: true,
    offers: [
      {
        title: `Choose VIP area`,
        price: 180
      },
      {
        title: `Choose live music`,
        price: 50
      }
    ]
  },
  {
    id: `3`,
    type: `taxi`,
    dateFrom: `2020-04-08T20:09:54.187Z`,
    dateTo: `2020-04-08T23:21:48.064Z`,
    destination: {
      name: `Amsterdam`,
      description: `Amsterdam, with an embankment of a mighty river as a centre of attraction, famous for its crowded street markets with the best street food in Asia.`,
      pictures: [
        {
          src: `http://picsum.photos/300/200?r=0.8923537877934087`,
          description: `Amsterdam street market`
        },
        {
          src: `http://picsum.photos/300/200?r=0.3804323823525231`,
          description: `Amsterdam street market`
        },
        {
          src: `http://picsum.photos/300/200?r=0.8318256755934537`,
          description: `Amsterdam kindergarten`
        },
        {
          src: `http://picsum.photos/300/200?r=0.19528414395677052`,
          description: `Amsterdam central station`
        },
        {
          src: `http://picsum.photos/300/200?r=0.2839580310924812`,
          description: `Amsterdam biggest supermarket`
        },
        {
          src: `http://picsum.photos/300/200?r=0.38639333129790154`,
          description: `Amsterdam central station`
        },
        {
          src: `http://picsum.photos/300/200?r=0.7843562011349257`,
          description: `Amsterdam biggest supermarket`
        },
        {
          src: `http://picsum.photos/300/200?r=0.1241743627393066`,
          description: `Amsterdam kindergarten`
        },
        {
          src: `http://picsum.photos/300/200?r=0.5746554092131462`,
          description: `Amsterdam street market`
        }
      ]
    },
    basePrice: 500,
    isFavorite: true,
    offers: [
      {
        title: `Drive slowly`,
        price: 50
      },
      {
        title: `Drive quickly, I'm in a hurry`,
        price: 80
      },
      {
        title: `Choose the radio station`,
        price: 60
      },
      {
        title: `Choose temperature`,
        price: 150
      },
      {
        title: `Upgrade to a business class`,
        price: 50
      }
    ]
  },
  {
    id: `4`,
    type: `flight`,
    dateFrom: `2020-04-08T23:21:48.064Z`,
    dateTo: `2020-04-09T04:52:07.948Z`,
    destination: {
      name: `Helsinki`,
      description: `Helsinki, with a beautiful old town.`,
      pictures: [
        {
          src: `http://picsum.photos/300/200?r=0.14404125613281282`,
          description: `Helsinki parliament building`
        },
        {
          src: `http://picsum.photos/300/200?r=0.08088725470935731`,
          description: `Helsinki city centre`
        },
        {
          src: `http://picsum.photos/300/200?r=0.022551883119386718`,
          description: `Helsinki biggest supermarket`
        },
        {
          src: `http://picsum.photos/300/200?r=0.4381453590010391`,
          description: `Helsinki park`
        },
        {
          src: `http://picsum.photos/300/200?r=0.24456344065114277`,
          description: `Helsinki parliament building`
        },
        {
          src: `http://picsum.photos/300/200?r=0.035273592945104904`,
          description: `Helsinki biggest supermarket`
        },
        {
          src: `http://picsum.photos/300/200?r=0.07684825592076105`,
          description: `Helsinki biggest supermarket`
        }
      ]
    },
    basePrice: 800,
    isFavorite: true,
    offers: [
      {
        title: `Business lounge`,
        price: 30
      },
      {
        title: `Upgrade to comfort class`,
        price: 150
      }
    ]
  },
  {
    id: `5`,
    type: `ship`,
    dateFrom: `2020-04-09T04:52:07.948Z`,
    dateTo: `2020-04-09T11:50:03.556Z`,
    destination: {
      name: `Berlin`,
      description: `Berlin, with crowded streets, with a beautiful old town, for those who value comfort and coziness.`,
      pictures: [
        {
          src: `http://picsum.photos/300/200?r=0.4699669927022476`,
          description: `Berlin kindergarten`
        },
        {
          src: `http://picsum.photos/300/200?r=0.06791149079415737`,
          description: `Berlin central station`
        },
        {
          src: `http://picsum.photos/300/200?r=0.8823933148139624`,
          description: `Berlin street market`
        },
        {
          src: `http://picsum.photos/300/200?r=0.24742591417997284`,
          description: `Berlin kindergarten`
        },
        {
          src: `http://picsum.photos/300/200?r=0.7227907382183918`,
          description: `Berlin kindergarten`
        },
        {
          src: `http://picsum.photos/300/200?r=0.043311122725969264`,
          description: `Berlin central station`
        }
      ]
    },
    basePrice: 500,
    isFavorite: false,
    offers: [
      {
        title: `Upgrade to business class`,
        price: 140
      },
      {
        title: `Choose seats`,
        price: 180
      },
      {
        title: `Business lounge`,
        price: 30
      }
    ]
  },
  {
    id: `6`,
    type: `taxi`,
    dateFrom: `2020-04-09T11:50:03.556Z`,
    dateTo: `2020-04-09T15:52:15.705Z`,
    destination: {
      name: `Den Haag`,
      description: `Den Haag, is a beautiful city, with crowded streets, with a beautiful old town, for those who value comfort and coziness.`,
      pictures: [
        {
          src: `http://picsum.photos/300/200?r=0.5393820101944147`,
          description: `Den Haag biggest supermarket`
        },
        {
          src: `http://picsum.photos/300/200?r=0.8115969467480975`,
          description: `Den Haag biggest supermarket`
        },
        {
          src: `http://picsum.photos/300/200?r=0.8120462529583286`,
          description: `Den Haag street market`
        },
        {
          src: `http://picsum.photos/300/200?r=0.5902604727625833`,
          description: `Den Haag biggest supermarket`
        },
        {
          src: `http://picsum.photos/300/200?r=0.5940726690021372`,
          description: `Den Haag street market`
        },
        {
          src: `http://picsum.photos/300/200?r=0.3757486123037812`,
          description: `Den Haag biggest supermarket`
        }
      ]
    },
    basePrice: 1100,
    isFavorite: true,
    offers: [
      {
        title: `Drive slowly`,
        price: 160
      },
      {
        title: `Choose the radio station`,
        price: 110
      }
    ]
  },
  {
    id: `7`,
    type: `transport`,
    dateFrom: `2020-04-09T15:52:15.705Z`,
    dateTo: `2020-04-09T19:51:47.942Z`,
    destination: {
      name: `Geneva`,
      description: `Geneva, with a beautiful old town, middle-eastern paradise, full of of cozy canteens where you can try the best coffee in the Middle East.`,
      pictures: [
        {
          src: `http://picsum.photos/300/200?r=0.7847700068822931`,
          description: `Geneva embankment`
        },
        {
          src: `http://picsum.photos/300/200?r=0.48353188562996396`,
          description: `Geneva embankment`
        },
        {
          src: `http://picsum.photos/300/200?r=0.06252464526577284`,
          description: `Geneva central station`
        },
        {
          src: `http://picsum.photos/300/200?r=0.5597436227234236`,
          description: `Geneva park`
        },
        {
          src: `http://picsum.photos/300/200?r=0.588733363287516`,
          description: `Geneva biggest supermarket`
        },
        {
          src: `http://picsum.photos/300/200?r=0.27172629226082035`,
          description: `Geneva city centre`
        },
        {
          src: `http://picsum.photos/300/200?r=0.2421216493897378`,
          description: `Geneva biggest supermarket`
        },
        {
          src: `http://picsum.photos/300/200?r=0.586507209780688`,
          description: `Geneva parliament building`
        },
        {
          src: `http://picsum.photos/300/200?r=0.3176215240850313`,
          description: `Geneva biggest supermarket`
        }
      ]
    },
    basePrice: 900,
    isFavorite: true,
    offers: []
  },
  {
    id: `8`,
    type: `train`,
    dateFrom: `2020-04-09T19:51:47.942Z`,
    dateTo: `2020-04-10T14:37:54.383Z`,
    destination: {
      name: `Munich`,
      description: `Munich, is a beautiful city, middle-eastern paradise, for those who value comfort and coziness, a perfect place to stay with a family.`,
      pictures: [
        {
          src: `http://picsum.photos/300/200?r=0.4696722311952972`,
          description: `Munich zoo`
        },
        {
          src: `http://picsum.photos/300/200?r=0.8500930497107444`,
          description: `Munich zoo`
        },
        {
          src: `http://picsum.photos/300/200?r=0.021917308289378656`,
          description: `Munich embankment`
        },
        {
          src: `http://picsum.photos/300/200?r=0.08511920494495895`,
          description: `Munich biggest supermarket`
        },
        {
          src: `http://picsum.photos/300/200?r=0.5879166499225625`,
          description: `Munich street market`
        },
        {
          src: `http://picsum.photos/300/200?r=0.7366275866408056`,
          description: `Munich embankment`
        },
        {
          src: `http://picsum.photos/300/200?r=0.3195669316166616`,
          description: `Munich kindergarten`
        }
      ]
    },
    basePrice: 1000,
    isFavorite: true,
    offers: [
      {
        title: `Order a breakfast`,
        price: 190
      },
      {
        title: `Book a taxi at the arrival point`,
        price: 90
      }
    ]
  },
  {
    id: `9`,
    type: `taxi`,
    dateFrom: `2020-04-10T14:37:54.383Z`,
    dateTo: `2020-04-11T03:26:27.763Z`,
    destination: {
      name: `Madrid`,
      description: `Madrid, with a beautiful old town, for those who value comfort and coziness, with an embankment of a mighty river as a centre of attraction, full of of cozy canteens where you can try the best coffee in the Middle East.`,
      pictures: [
        {
          src: `http://picsum.photos/300/200?r=0.4136776379568774`,
          description: `Madrid biggest supermarket`
        },
        {
          src: `http://picsum.photos/300/200?r=0.17609002845293453`,
          description: `Madrid kindergarten`
        },
        {
          src: `http://picsum.photos/300/200?r=0.33998297094360996`,
          description: `Madrid embankment`
        },
        {
          src: `http://picsum.photos/300/200?r=0.0432858527107054`,
          description: `Madrid biggest supermarket`
        },
        {
          src: `http://picsum.photos/300/200?r=0.67225715737035`,
          description: `Madrid street market`
        },
        {
          src: `http://picsum.photos/300/200?r=0.3732337172788791`,
          description: `Madrid city centre`
        },
        {
          src: `http://picsum.photos/300/200?r=0.16595357862731208`,
          description: `Madrid parliament building`
        }
      ]
    },
    basePrice: 800,
    isFavorite: false,
    offers: [
      {
        title: `Drive slowly`,
        price: 190
      },
      {
        title: `Drive quickly, I'm in a hurry`,
        price: 90
      },
      {
        title: `Choose the radio station`,
        price: 120
      }
    ]
  },
  {
    id: `10`,
    type: `sightseeing`,
    dateFrom: `2020-04-11T03:26:27.763Z`,
    dateTo: `2020-04-12T00:20:11.098Z`,
    destination: {
      name: `Naples`,
      description: `Naples, a perfect place to stay with a family.`,
      pictures: [
        {
          src: `http://picsum.photos/300/200?r=0.2215817012316561`,
          description: `Naples park`
        },
        {
          src: `http://picsum.photos/300/200?r=0.00847081403616512`,
          description: `Naples city centre`
        },
        {
          src: `http://picsum.photos/300/200?r=0.04911684357111157`,
          description: `Naples city centre`
        },
        {
          src: `http://picsum.photos/300/200?r=0.09608186629682147`,
          description: `Naples street market`
        },
        {
          src: `http://picsum.photos/300/200?r=0.7807653806589212`,
          description: `Naples biggest supermarket`
        },
        {
          src: `http://picsum.photos/300/200?r=0.4833878679058352`,
          description: `Naples kindergarten`
        },
        {
          src: `http://picsum.photos/300/200?r=0.7908032700066554`,
          description: `Naples biggest supermarket`
        }
      ]
    },
    basePrice: 600,
    isFavorite: false,
    offers: []
  },
  {
    id: `11`,
    type: `check-in`,
    dateFrom: `2020-04-12T00:20:11.098Z`,
    dateTo: `2020-04-12T07:21:44.016Z`,
    destination: {
      name: `Helsinki`,
      description: `Helsinki, is a beautiful city, a true asian pearl, with crowded streets, with an embankment of a mighty river as a centre of attraction, full of of cozy canteens where you can try the best coffee in the Middle East.`,
      pictures: [
        {
          src: `http://picsum.photos/300/200?r=0.9900424512658972`,
          description: `Helsinki park`
        },
        {
          src: `http://picsum.photos/300/200?r=0.3437587965963169`,
          description: `Helsinki street market`
        },
        {
          src: `http://picsum.photos/300/200?r=0.3568294709014963`,
          description: `Helsinki kindergarten`
        },
        {
          src: `http://picsum.photos/300/200?r=0.773646055910834`,
          description: `Helsinki kindergarten`
        },
        {
          src: `http://picsum.photos/300/200?r=0.05503972851676431`,
          description: `Helsinki city centre`
        }
      ]
    },
    basePrice: 400,
    isFavorite: false,
    offers: [
      {
        title: `Order a meal from the restaurant`,
        price: 40
      },
      {
        title: `Choose the time of check-in`,
        price: 80
      },
      {
        title: `Laundry`,
        price: 170
      },
      {
        title: `Choose the time of check-out`,
        price: 30
      }
    ]
  },
  {
    id: `12`,
    type: `drive`,
    dateFrom: `2020-04-12T07:21:44.016Z`,
    dateTo: `2020-04-12T16:29:12.807Z`,
    destination: {
      name: `Monaco`,
      description: `Monaco, is a beautiful city, a true asian pearl, with crowded streets, in a middle of Europe, with a beautiful old town, middle-eastern paradise, for those who value comfort and coziness, with an embankment of a mighty river as a centre of attraction.`,
      pictures: [
        {
          src: `http://picsum.photos/300/200?r=0.1795881471413141`,
          description: `Monaco park`
        },
        {
          src: `http://picsum.photos/300/200?r=0.02524333671603518`,
          description: `Monaco city centre`
        },
        {
          src: `http://picsum.photos/300/200?r=0.8540730063222921`,
          description: `Monaco park`
        },
        {
          src: `http://picsum.photos/300/200?r=0.5241751850745635`,
          description: `Monaco city centre`
        },
        {
          src: `http://picsum.photos/300/200?r=0.898404768324572`,
          description: `Monaco central station`
        },
        {
          src: `http://picsum.photos/300/200?r=0.15295377361445106`,
          description: `Monaco street market`
        },
        {
          src: `http://picsum.photos/300/200?r=0.658767178704293`,
          description: `Monaco central station`
        }
      ]
    },
    basePrice: 500,
    isFavorite: true,
    offers: []
  },
  {
    id: `13`,
    type: `flight`,
    dateFrom: `2020-04-12T16:29:12.807Z`,
    dateTo: `2020-04-13T08:40:15.051Z`,
    destination: {
      name: `Vien`,
      description: `Vien, in a middle of Europe, middle-eastern paradise, famous for its crowded street markets with the best street food in Asia.`,
      pictures: [
        {
          src: `http://picsum.photos/300/200?r=0.2620957926535843`,
          description: `Vien parliament building`
        },
        {
          src: `http://picsum.photos/300/200?r=0.5126290731380279`,
          description: `Vien street market`
        },
        {
          src: `http://picsum.photos/300/200?r=0.3177808025324975`,
          description: `Vien street market`
        },
        {
          src: `http://picsum.photos/300/200?r=0.1880190156258026`,
          description: `Vien parliament building`
        },
        {
          src: `http://picsum.photos/300/200?r=0.1842147025595191`,
          description: `Vien parliament building`
        },
        {
          src: `http://picsum.photos/300/200?r=0.48346926621487785`,
          description: `Vien street market`
        },
        {
          src: `http://picsum.photos/300/200?r=0.2869156145247933`,
          description: `Vien city centre`
        }
      ]
    },
    basePrice: 500,
    isFavorite: false,
    offers: [
      {
        title: `Business lounge`,
        price: 170
      },
      {
        title: `Upgrade to business class`,
        price: 100
      },
      {
        title: `Upgrade to comfort class`,
        price: 70
      }
    ]
  },
  {
    id: `14`,
    type: `drive`,
    dateFrom: `2020-04-13T08:40:15.051Z`,
    dateTo: `2020-04-14T04:58:58.158Z`,
    destination: {
      name: `Oslo`,
      description: `Oslo, with an embankment of a mighty river as a centre of attraction, full of of cozy canteens where you can try the best coffee in the Middle East.`,
      pictures: [
        {
          src: `http://picsum.photos/300/200?r=0.29237846419519475`,
          description: `Oslo zoo`
        },
        {
          src: `http://picsum.photos/300/200?r=0.42858394888050544`,
          description: `Oslo biggest supermarket`
        },
        {
          src: `http://picsum.photos/300/200?r=0.9189558692633404`,
          description: `Oslo street market`
        },
        {
          src: `http://picsum.photos/300/200?r=0.4193551787704455`,
          description: `Oslo zoo`
        },
        {
          src: `http://picsum.photos/300/200?r=0.1527292372816722`,
          description: `Oslo central station`
        },
        {
          src: `http://picsum.photos/300/200?r=0.8338849698393809`,
          description: `Oslo embankment`
        },
        {
          src: `http://picsum.photos/300/200?r=0.35312328715794905`,
          description: `Oslo street market`
        },
        {
          src: `http://picsum.photos/300/200?r=0.4754287543105882`,
          description: `Oslo central station`
        }
      ]
    },
    basePrice: 900,
    isFavorite: true,
    offers: [
      {
        title: `Choose comfort class`,
        price: 190
      }
    ]
  },
  {
    id: `15`,
    type: `ship`,
    dateFrom: `2020-04-14T04:58:58.158Z`,
    dateTo: `2020-04-14T17:10:53.365Z`,
    destination: {
      name: `Kopenhagen`,
      description: `Kopenhagen, a true asian pearl, with crowded streets, middle-eastern paradise, full of of cozy canteens where you can try the best coffee in the Middle East, famous for its crowded street markets with the best street food in Asia.`,
      pictures: [
        {
          src: `http://picsum.photos/300/200?r=0.25666585017174315`,
          description: `Kopenhagen embankment`
        },
        {
          src: `http://picsum.photos/300/200?r=0.7135436263489083`,
          description: `Kopenhagen biggest supermarket`
        },
        {
          src: `http://picsum.photos/300/200?r=0.31030556883719274`,
          description: `Kopenhagen biggest supermarket`
        },
        {
          src: `http://picsum.photos/300/200?r=0.8674730983797936`,
          description: `Kopenhagen central station`
        },
        {
          src: `http://picsum.photos/300/200?r=0.9412682268705954`,
          description: `Kopenhagen embankment`
        },
        {
          src: `http://picsum.photos/300/200?r=0.5636465672576265`,
          description: `Kopenhagen street market`
        },
        {
          src: `http://picsum.photos/300/200?r=0.5366556695970652`,
          description: `Kopenhagen zoo`
        }
      ]
    },
    basePrice: 1100,
    isFavorite: true,
    offers: [
      {
        title: `Upgrade to comfort class`,
        price: 60
      },
      {
        title: `Add luggage`,
        price: 30
      }
    ]
  },
  {
    id: `16`,
    type: `transport`,
    dateFrom: `2020-04-14T17:10:53.365Z`,
    dateTo: `2020-04-15T13:09:45.453Z`,
    destination: {
      name: `Amsterdam`,
      description: `Amsterdam, with a beautiful old town, middle-eastern paradise.`,
      pictures: [
        {
          src: `http://picsum.photos/300/200?r=0.382340569776362`,
          description: `Amsterdam biggest supermarket`
        },
        {
          src: `http://picsum.photos/300/200?r=0.7087208873642337`,
          description: `Amsterdam kindergarten`
        },
        {
          src: `http://picsum.photos/300/200?r=0.9268183755289074`,
          description: `Amsterdam park`
        },
        {
          src: `http://picsum.photos/300/200?r=0.42503620745820014`,
          description: `Amsterdam biggest supermarket`
        },
        {
          src: `http://picsum.photos/300/200?r=0.10795904270692946`,
          description: `Amsterdam biggest supermarket`
        }
      ]
    },
    basePrice: 800,
    isFavorite: false,
    offers: []
  },
  {
    id: `17`,
    type: `ship`,
    dateFrom: `2020-04-15T13:09:45.453Z`,
    dateTo: `2020-04-16T02:28:57.769Z`,
    destination: {
      name: `Munich`,
      description: `Munich, is a beautiful city, with crowded streets, middle-eastern paradise, for those who value comfort and coziness, full of of cozy canteens where you can try the best coffee in the Middle East, a perfect place to stay with a family.`,
      pictures: [
        {
          src: `http://picsum.photos/300/200?r=0.19220459848013594`,
          description: `Munich kindergarten`
        },
        {
          src: `http://picsum.photos/300/200?r=0.6972275128205494`,
          description: `Munich central station`
        },
        {
          src: `http://picsum.photos/300/200?r=0.217360865303601`,
          description: `Munich street market`
        },
        {
          src: `http://picsum.photos/300/200?r=0.1841294667032396`,
          description: `Munich street market`
        },
        {
          src: `http://picsum.photos/300/200?r=0.6666840677969035`,
          description: `Munich biggest supermarket`
        },
        {
          src: `http://picsum.photos/300/200?r=0.22334896215888134`,
          description: `Munich biggest supermarket`
        },
        {
          src: `http://picsum.photos/300/200?r=0.9637536732874172`,
          description: `Munich park`
        },
        {
          src: `http://picsum.photos/300/200?r=0.0838461517200928`,
          description: `Munich embankment`
        }
      ]
    },
    basePrice: 700,
    isFavorite: true,
    offers: [
      {
        title: `Choose meal`,
        price: 150
      },
      {
        title: `Upgrade to business class`,
        price: 140
      },
      {
        title: `Choose seats`,
        price: 90
      }
    ]
  },
  {
    id: `18`,
    type: `sightseeing`,
    dateFrom: `2020-04-16T02:28:57.769Z`,
    dateTo: `2020-04-17T00:01:19.175Z`,
    destination: {
      name: `Chamonix`,
      description: `Chamonix, is a beautiful city, with a beautiful old town, full of of cozy canteens where you can try the best coffee in the Middle East, a perfect place to stay with a family.`,
      pictures: [
        {
          src: `http://picsum.photos/300/200?r=0.45500244715479665`,
          description: `Chamonix central station`
        },
        {
          src: `http://picsum.photos/300/200?r=0.7626713614000868`,
          description: `Chamonix parliament building`
        },
        {
          src: `http://picsum.photos/300/200?r=0.8902249640617019`,
          description: `Chamonix embankment`
        },
        {
          src: `http://picsum.photos/300/200?r=0.06142144881479594`,
          description: `Chamonix zoo`
        },
        {
          src: `http://picsum.photos/300/200?r=0.7448158290236226`,
          description: `Chamonix zoo`
        },
        {
          src: `http://picsum.photos/300/200?r=0.9491440610503215`,
          description: `Chamonix park`
        },
        {
          src: `http://picsum.photos/300/200?r=0.7130878196532235`,
          description: `Chamonix zoo`
        },
        {
          src: `http://picsum.photos/300/200?r=0.80742940728179`,
          description: `Chamonix park`
        }
      ]
    },
    basePrice: 300,
    isFavorite: true,
    offers: []
  },
  {
    id: `19`,
    type: `train`,
    dateFrom: `2020-04-17T00:01:19.175Z`,
    dateTo: `2020-04-17T19:53:27.971Z`,
    destination: {
      name: `Venice`,
      description: `Venice, in a middle of Europe, full of of cozy canteens where you can try the best coffee in the Middle East, famous for its crowded street markets with the best street food in Asia.`,
      pictures: [
        {
          src: `http://picsum.photos/300/200?r=0.3209230161249248`,
          description: `Venice biggest supermarket`
        },
        {
          src: `http://picsum.photos/300/200?r=0.029371317977000544`,
          description: `Venice central station`
        },
        {
          src: `http://picsum.photos/300/200?r=0.8928202545009449`,
          description: `Venice city centre`
        },
        {
          src: `http://picsum.photos/300/200?r=0.7788628711109533`,
          description: `Venice park`
        },
        {
          src: `http://picsum.photos/300/200?r=0.41524188467656886`,
          description: `Venice embankment`
        },
        {
          src: `http://picsum.photos/300/200?r=0.6110076687193944`,
          description: `Venice city centre`
        },
        {
          src: `http://picsum.photos/300/200?r=0.7258370855909881`,
          description: `Venice embankment`
        }
      ]
    },
    basePrice: 900,
    isFavorite: true,
    offers: [
      {
        title: `Order a breakfast`,
        price: 70
      }
    ]
  }
];

export default points;
