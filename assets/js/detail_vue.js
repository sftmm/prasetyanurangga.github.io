  var router = new VueRouter({

    mode: 'history',

    routes: []

  });
var detail = new Vue({
  el: '#main',
  router,
  data () {
    return {
      repos: ""
    }
  },
  mounted () {
    parameters = this.$route.query.name
    axios
      .get('https://api.github.com/repos/prasetyanurangga/'+parameters)
      .then(response => (this.repos = response.data))
  },
  updated(){
  },
  methods:{
  }
})