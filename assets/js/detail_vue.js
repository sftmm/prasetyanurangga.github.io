  var router = new VueRouter({

    mode: 'history',

    routes: []

  });
var detail = new Vue({
  el: '#wrap',
  router,
  data () {
    return {
      repos: [],
      user: []
    }
  },
  mounted () {
    axios.all([
        this.request_1(), //or direct the axios request
        this.request_2(),
      ])
    .then(axios.spread((first_response, second_response) => {
          this.repos= first_response.data;
          this.user =  second_response.data
    }))
  },
  updated(){
  },
  methods:{
    request_1() {
     parameters = this.$route.query.name
     return axios.get('https://api.github.com/repos/prasetyanurangga/'+parameters)
    },
    request_2() {
     return axios.get('https://prasetyanurangga.github.io/data/profile.json')
    },
  }
})