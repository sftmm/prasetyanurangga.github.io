var profil = new Vue({
  el: '#main',
  data () {
    return {
      user: ""
    }
  },
  mounted () {
    axios
      .get('http://my-json-server.typicode.com/prasetyanurangga/api_server/user_repos')
      .then(response => (this.user = response.data))
  },
  updated(){
  },
  methods:{
  }
})