const state = {
  shoes: [{
    id: 0,
    title: "Balenciaga",
    price: 10,
    quantity: 0,
    ratings: 3.6,
    reviews: 3,
    reviews_count: 11,
    source: "https://z-m-scontent.fdar4-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/p480x480/40353167_2416866101657191_2863074866515410944_o.jpg?_nc_cat=106&_nc_sid=2d5d41&efg=eyJpIjoibyJ9&_nc_eui2=AeERDIGs-Gi6jlJZEBlfhCKg62YnW3daKOLrZidbd1oo4tqJynHSOy8B09WyfjjV0XDisQ-fAPCpqz5jQ1zlG-k2&_nc_ohc=OL2o4k3RE1kAX9IRr-i&_nc_ad=z-m&_nc_cid=1436&_nc_eh=508f904a431a9d1391963226d86fabd1&_nc_ht=z-m-scontent.fdar4-1.fna&_nc_tp=3&oh=1fad2282f5de925bf731454970596d07&oe=5F1F09E5"
  },
    {
      id: 1,
      title: "Balenciaga",
      price: 10,
      quantity: 0,
      ratings: 3.6,
      reviews: 3,
      reviews_count: 11,
      source: "https://z-m-scontent.fdar4-1.fna.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/16807181_620234094840586_5308755172382967583_n.jpg?_nc_cat=110&_nc_sid=2d5d41&efg=eyJpIjoibyJ9&_nc_eui2=AeHgpXzcXBwQqnmDC_RZOHk9caNdj1zwAbFxo12PXPABsUQBpOl1epJe59-Dg82PlNfdwfGRNddZHBDS7zdiNwKj&_nc_ohc=d7h_uSAQffoAX93ibBq&_nc_ad=z-m&_nc_cid=1436&_nc_eh=508f904a431a9d1391963226d86fabd1&_nc_ht=z-m-scontent.fdar4-1.fna&_nc_tp=14&oh=b788cb952557d9ecbf9c37db6905d1f6&oe=5F20D649"
    },
    {
      id: 2,
      title: "Balenciaga Race Runner",
      price: 10,
      quantity: 0,
      ratings: 3.6,
      reviews: 3,
      reviews_count: 11,
      source: "https://z-m-scontent.fdar4-1.fna.fbcdn.net/v/t31.0-0/cp0/e15/q65/p480x480/28515252_1737485772976171_2561326535915101887_o.jpg?_nc_cat=106&_nc_sid=2d5d41&efg=eyJpIjoibyJ9&_nc_eui2=AeGsuwzRpiwUYh31bVGPhQrsBy2MbZbK4ZQHLYxtlsrhlLkL6o66fKUCmru6dQRXuQRu5mLS5O_qzqZ9BHWS_Mzi&_nc_ohc=K2m1Wie2mzsAX--PdqL&_nc_ad=z-m&_nc_cid=1436&_nc_eh=508f904a431a9d1391963226d86fabd1&_nc_ht=z-m-scontent.fdar4-1.fna&_nc_tp=3&oh=69ecf160c952950d0121f866bd31df6f&oe=5F1EF134"
    },
    {
      id: 3,
      title: "Adidas Colors",
      price: 15,
      quantity: 0,
      ratings: 3.6,
      reviews: 3,
      reviews_count: 11,
      source: "https://z-m-scontent.fdar4-1.fna.fbcdn.net/v/t1.0-0/p480x480/18342076_258458101288528_1169920439653426504_n.png?_nc_cat=100&_nc_sid=2d5d41&efg=eyJpIjoibyJ9&_nc_eui2=AeGofjPGNafeDxi-s_-cMIOYt9mjmtVAPni32aOa1UA-eFR-XPT4_IBDUUnEBgSWY0qYjByy8q85dy_aUK9becEq&_nc_ohc=_S1jWgrnC4IAX_uxrab&_nc_ad=z-m&_nc_cid=1436&_nc_eh=508f904a431a9d1391963226d86fabd1&_nc_ht=z-m-scontent.fdar4-1.fna&oh=2e31d6076a434e046aedf255acd7a710&oe=5F21FB94"
    },
    {
      id: 4,
      title: "Adidas Latest",
      price: 30,
      quantity: 0,
      ratings: 3.6,
      reviews: 3,
      reviews_count: 11,
      source: "https://z-m-scontent.fdar6-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s480x480/93169859_150248299817042_1216087537089511424_n.jpg?_nc_cat=105&_nc_sid=110474&efg=eyJpIjoibyJ9&_nc_eui2=AeEK8iKhVBOIjb22cwHqqa23r6dG4Uf1AeWvp0bhR_UB5W4G-z-2bJ5CsI9yw-IRrBr1ObTx1bb2HvpOSKJ_MuEp&_nc_ohc=n_fWehN2JBwAX8xfxg-&_nc_ad=z-m&_nc_cid=1436&_nc_eh=508f904a431a9d1391963226d86fabd1&_nc_ht=z-m-scontent.fdar6-1.fna&_nc_tp=9&oh=964cb80dc25a0d9e81cb057f6e83a7d8&oe=5F1FFBDA"
    },
    {
      id: 5,
      title: "Adidas Air",
      price: 20,
      quantity: 0,
      ratings: 3.6,
      reviews: 3,
      reviews_count: 11,
      source: "https://z-m-scontent.fdar4-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s480x480/13239119_1788213884733823_1223357890436892950_n.jpg?_nc_cat=101&_nc_sid=2d5d41&efg=eyJpIjoibyJ9&_nc_eui2=AeG2dL5kf0jP5wyiHRI7-Lj7B5PkMRyXEOkHk-QxHJcQ6bSnqMJwSnwn41VBl_vd5tamSNlSOLizd9z2L0mAhXaU&_nc_ohc=diZ6tLgs3fYAX_09Lep&_nc_ad=z-m&_nc_cid=1436&_nc_eh=508f904a431a9d1391963226d86fabd1&_nc_ht=z-m-scontent.fdar4-1.fna&_nc_tp=9&oh=8d70c2047c89af3c8c6e790646cf6999&oe=5F21BF8E"
    },
    {
      id: 6,
      title: "Adidas Street Runner",
      price: 20,
      quantity: 0,
      ratings: 3.6,
      reviews: 3,
      reviews_count: 11,
      source: "https://z-m-scontent.fdar4-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/p480x480/16640584_738625449638189_833058391165432895_n.jpg?_nc_cat=109&_nc_sid=dd9801&efg=eyJpIjoibyJ9&_nc_eui2=AeH0DDVuQYko-MdoKoekl9ghxaGu9ZjGvmvFoa71mMa-a5vl4kX_WV_Gu1GPo4bdAQ1O8SX9KX8Kmpp_Dr8xzHji&_nc_ohc=yJWLmF3GD0EAX8oi-kd&_nc_ad=z-m&_nc_cid=1436&_nc_eh=508f904a431a9d1391963226d86fabd1&_nc_ht=z-m-scontent.fdar4-1.fna&_nc_tp=3&oh=a986e95646b31a895e79eb9c742f4fe0&oe=5F2189A6"
    },
    {
      id: 7,
      title: "Adidas Army",
      price: 25,
      quantity: 0,
      ratings: 3.6,
      reviews: 3,
      reviews_count: 11,
      source: "https://z-m-scontent.fdar6-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/p480x480/15326531_1634539580178572_4265886062010630375_n.jpg?_nc_cat=103&_nc_sid=e007fa&efg=eyJpIjoibyJ9&_nc_eui2=AeE1ksIQqyl-EW48IGi5cJRvM5lIWdMjA30zmUhZ0yMDfTUmrqj0z2PDg9xb64Siw2Qaa06Mx3q8NeztaDofPeWd&_nc_ohc=J65aZEsXubIAX91Xcye&_nc_ad=z-m&_nc_cid=1436&_nc_eh=508f904a431a9d1391963226d86fabd1&_nc_ht=z-m-scontent.fdar6-1.fna&_nc_tp=3&oh=4013d8e6bb829e3d0d33a79ffbe10985&oe=5F20C640"
    },
    {
      id: 8,
      title: "Adidas Soccer boots",
      price: 10,
      quantity: 0,
      ratings: 3.6,
      reviews: 3,
      reviews_count: 11,
      source: "https://z-m-scontent.fdar4-1.fna.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/19961364_1602241703121289_4970879672607384988_n.jpg?_nc_cat=106&_nc_sid=2d5d41&efg=eyJpIjoibyJ9&_nc_eui2=AeFLJQoeyJm1fGvd_IN72xlrNQ6GwPcaRvc1DobA9xpG91SjWcv8CzsVqtdBH-hORpeaFtRr5mZilWWLS_6I42_L&_nc_ohc=ULOCqcGcBYUAX87IGmn&_nc_ad=z-m&_nc_cid=1436&_nc_eh=508f904a431a9d1391963226d86fabd1&_nc_ht=z-m-scontent.fdar4-1.fna&_nc_tp=14&oh=692edfb0e3c53179991cdbc053cf973b&oe=5F2073AD"
    },
    {
      id: 9,
      title: "Nike latest",
      price: 40,
      quantity: 0,
      ratings: 3.6,
      reviews: 3,
      reviews_count: 11,
      source: "https://z-m-scontent.fdar6-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/p480x480/11745597_810688715695634_7173850763273886162_n.jpg?_nc_cat=107&_nc_sid=110474&efg=eyJpIjoibyJ9&_nc_eui2=AeHNVsh0u-GCFQ70-u0W1PcbGG0XWI6tpf8YbRdYjq2l_2lTjmXDsPqT17BHpF4zqBYkYnWsELZckicign3yf6xM&_nc_ohc=daN8bg5N3QIAX-_CiMT&_nc_ad=z-m&_nc_cid=1436&_nc_eh=508f904a431a9d1391963226d86fabd1&_nc_ht=z-m-scontent.fdar6-1.fna&_nc_tp=3&oh=30f6bb22eac615ba4505ea872be0a45a&oe=5F221FD0"
    },
    {
      id: 10,
      title: "Nike Black",
      price: 35,
      quantity: 0,
      ratings: 3.6,
      reviews: 3,
      reviews_count: 11,
      source: "https://z-m-scontent.fdar6-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s480x480/11745766_810688695695636_1072288882662212541_n.jpg?_nc_cat=105&_nc_sid=110474&efg=eyJpIjoibyJ9&_nc_eui2=AeFYrSQj_yM0swEddu1njOSl77tQ4K7sJajvu1DgruwlqD1y3PSyFtXiElTPZb9xFfn9SMIlIsxdP-2vX9c_50Lw&_nc_ohc=cPEU_zoICqcAX-K_uvC&_nc_ad=z-m&_nc_cid=1436&_nc_eh=508f904a431a9d1391963226d86fabd1&_nc_ht=z-m-scontent.fdar6-1.fna&_nc_tp=9&oh=95c920e79064940acded4088fa77f4f8&oe=5F20B8D6"
    },
    {
      id: 10,
      title: "Nike snickers",
      price: 35,
      quantity: 0,
      ratings: 3.6,
      reviews: 3,
      reviews_count: 11,
      source: "https://z-m-scontent.fdar4-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/p320x320/10671217_810688639028975_4290057560425416742_n.jpg?_nc_cat=100&_nc_sid=110474&efg=eyJpIjoibyJ9&_nc_eui2=AeH5Ldgh5jR38vmoMDhzCZx_VqabXBFZjndWpptcEVmOd_cj6Linn6EISyaOOT03wPe84eCzdYSww-wuDoYLNslu&_nc_ohc=WoYtdmu9RfEAX_RpwXk&_nc_ad=z-m&_nc_cid=1436&_nc_eh=508f904a431a9d1391963226d86fabd1&_nc_ht=z-m-scontent.fdar4-1.fna&_nc_tp=3&oh=10a695aa99f4d63e5e79feea39bce2b7&oe=5F226124"
    },
    {
      id: 10,
      title: "Nike Graphitti",
      price: 35,
      quantity: 0,
      ratings: 3.6,
      reviews: 3,
      reviews_count: 11,
      source: "https://z-m-scontent.fdar6-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s480x480/11743017_810688682362304_205967938917616068_n.jpg?_nc_cat=104&_nc_sid=110474&efg=eyJpIjoibyJ9&_nc_eui2=AeHeuZYYWildZW2C_U1S0lDpuT2Nhas-8IK5PY2Fqz7wgjFwS4LEz5LCjY87VZ7H2H1kv-kl8wLw8mo_PKk6I6bJ&_nc_ohc=tVsuXsnTPM8AX8fOanl&_nc_ad=z-m&_nc_cid=1436&_nc_eh=508f904a431a9d1391963226d86fabd1&_nc_ht=z-m-scontent.fdar6-1.fna&_nc_tp=9&oh=0b91741c7a02430c597ad2a7695c3eeb&oe=5F227500"
    },
    {
      id: 10,
      title: "Nike Air",
      price: 35,
      quantity: 0,
      ratings: 3.6,
      reviews: 3,
      reviews_count: 11,
      source: "https://z-m-scontent.fdar4-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s480x480/11173359_810688665695639_7466567993366883635_n.jpg?_nc_cat=109&_nc_sid=110474&efg=eyJpIjoibyJ9&_nc_eui2=AeHMtWz9VjeQPEDSS62JFbfKueBIUqAl-Vi54EhSoCX5WMYuj-oON3WZ7kAxXbGExQAHetCbIDQOKkjj0kcSK1eU&_nc_ohc=EgDTBcAuNJIAX9NJB69&_nc_ad=z-m&_nc_cid=1436&_nc_eh=508f904a431a9d1391963226d86fabd1&_nc_ht=z-m-scontent.fdar4-1.fna&_nc_tp=9&oh=e666acfa0d24ebdfd0452e20ea1e098a&oe=5F20EB70"
    },
  ],
  tshirts: [{
    id: 0,
    title: "Mama",
    price: 10,
    quantity: 0,
    ratings: 3.6,
    reviews: 3,
    reviews_count: 11,
    source: ""
  },
    {
      id: 0,
      title: "Mama",
      price: 10,
      quantity: 0,
      ratings: 3.6,
      reviews: 3,
      reviews_count: 11,
      source: ""
    },
    {
      id: 0,
      title: "Mama",
      price: 10,
      quantity: 0,
      ratings: 3.6,
      reviews: 3,
      reviews_count: 11,
      source: ""
    },
    {
      id: 0,
      title: "Mama",
      price: 10,
      quantity: 0,
      ratings: 3.6,
      reviews: 3,
      reviews_count: 11,
      source: ""
    },
    {
      id: 0,
      title: "Mama",
      price: 10,
      quantity: 0,
      ratings: 3.6,
      reviews: 3,
      reviews_count: 11,
      source: ""
    },
    {
      id: 0,
      title: "Mama",
      price: 10,
      quantity: 0,
      ratings: 3.6,
      reviews: 3,
      reviews_count: 11,
      source: ""
    },
    {
      id: 0,
      title: "Mama",
      price: 10,
      quantity: 0,
      ratings: 3.6,
      reviews: 3,
      reviews_count: 11,
      source: ""
    },
    {
      id: 0,
      title: "Mama",
      price: 10,
      quantity: 0,
      ratings: 3.6,
      reviews: 3,
      reviews_count: 11,
      source: ""
    },
    {
      id: 0,
      title: "Mama",
      price: 10,
      quantity: 0,
      ratings: 3.6,
      reviews: 3,
      reviews_count: 11,
      source: ""
    },
  ],
  product: {},
}

const getters = {
  shoes: state => state.shoes,
  product: state => state.product
}

const actions = {
  rate: function (product, number) {
    product.ratings += number
  },
  selectProduct: function ( {
    commit
  }, product) {
    commit('SELECT_PRODUCT', product)
  }
}

const mutations = {
  SELECT_PRODUCT(state, product) {
    state.product = product
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}