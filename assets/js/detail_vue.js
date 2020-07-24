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
      local_repos: [],
      user: []
    }
  },
  mounted () {
    axios.all([
        this.request_1(), //or direct the axios request
        this.request_2(),
        this.request_3(),
      ])
    .then(axios.spread((first_response, second_response, third_response) => {
      var local_repos = [];
      third_response.forEach(
        function filtering(repos, index, array)
        {
          if(repos.name_git == first_response.data.name){
            local_repos.push(repos);
          }
        }
      );
      this.repos= first_response.data;
      this.user =  second_response.data;
      this.local_repos = local_repos;
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
    request_3() {
     return axios.get('https://prasetyanurangga.github.io/data/repository.json')
    },
  }
})