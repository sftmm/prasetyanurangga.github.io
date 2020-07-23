var profil = new Vue({
  el: '#main',
  data () {
    return {
      user: ""
    }
  },
  mounted () {
    axios
      .get('https://raw.githubusercontent.com/prasetyanurangga/prasetyanurangga.github.io/master/data/profile.json')
      .then(response => (this.user = response.data))
  },
  updated(){
  },
  methods:{
  }
})